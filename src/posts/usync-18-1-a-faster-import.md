---
title: uSync 18.1 - a faster import
date: 2026-08-12 14:00:00
tags:
  - uSync
  - umbraco
---

uSync 18.1 is out, and it is mostly about speed.

If you have a site with a few hundred items in your uSync folder, you have probably never
thought about how long an import takes. If you have a site with tens of thousands, you almost
certainly have.

## Why is a "no changes" import slow?

The thing that surprises people is that an import where **nothing has changed** costs almost as
much as a full export.

That is because of how uSync decides whether something has changed. For every item in the uSync
folder, it:

1. looks the item up in Umbraco (a database hit),
2. serializes the whole thing to XML,
3. hashes both sides,
4. compares the hashes.

If the hashes match, uSync says "no change" and moves on — having done all of that work to find
out it had nothing to do. Reading the files off disk isn't the bottleneck; that has been
parallelised for a while. It is the per-item work afterwards, and on a big site that per-item
work *is* the run time.

## The import state cache

New in 18.1 is an opt-in setting that fixes this:

```json
"uSync": {
  "Settings": {
    "CacheImportState": true
  }
}
```

With it on, uSync remembers the hash of each file it has **confirmed** matches what is in
Umbraco. Next time round, if the file on disk still hashes to the same value, uSync skips
straight to "no change" — no database lookup, no re-serialize. Import cost goes from *check
everything* to *check the things that have actually changed*.

On a large site the difference is not subtle.

### Two things you should know before turning it on

**The first run is no faster.** uSync only ever records an item in two situations: the full,
expensive check ran and came back as "no change", or uSync has just exported the item (in which
case the file was written from the database and the two sides match by definition). So the
first run after enabling it is exactly as slow as it was before — the win arrives on the second
run. An export warms the cache too, so an export-then-report cycle is already warm.

We deliberately do **not** record an item after a successful import. It is tempting to assume
that because we just wrote the item, the two sides now agree — but they don't always. Some items
don't round-trip exactly, which is what uSync's *"XML is different — but properties may not have
changed"* message has always been telling you. Recording those would silence a real difference
for good, so we don't. Those items get checked again next time. Slower, but honest.

**It is off by default, and that is deliberate.** The cache is invalidated by Umbraco's
notifications — an item saved, deleted, moved or published is forgotten immediately, and
changing a doctype, datatype, template, language or folder throws the *whole* cache away
(because those get baked into other items' XML — rename a doctype and every item using it
serializes differently, without those items ever being touched). What it cannot see is a change
made by something that raises no notification at all: raw SQL, a row-level database restore.
That is the residual risk, and it is why we haven't turned it on for you.

A **force import** always ignores the cache entirely, so there is always a way to get a
guaranteed full check.

### Where it lives

`{LocalTempPath}/uSync/cache/` — the site's temp folder, deliberately **not** the uSync folder.
The cache describes *this site's database*, not the source of truth, so it must never travel
between environments, get committed, or turn up in a diff.

It is thrown away whenever we can't prove it still applies: a different database, a new uSync
version, or a change to any handler setting that affects what gets written out. If your host
recycles the temp folder (Azure App Service will, and each instance in a scale-out has its own),
the worst that happens is a slow first run.

If you are thinking about turning this on, please read
[the full write-up in the repo](https://github.com/KevinJump/uSync/blob/main/docs/perf/state-cache.md)
first — in particular the limitations section, and the note for anyone who has written a custom
serializer that pulls data in from another item.

> **SCREENSHOT NEEDED** — probably a before/after of an import time on a big site, or the log
> lines showing `state cache skipped N of M items`. I'll grab one off the test site.

## The rest of the performance work

The cache is the headline, but it is not the only thing in 18.1.

**Three O(n²) lookups are gone from the import path.** The duplicate-key check when merging
folders, the "keys to keep" check when cleaning up deleted items, and — the big one — the second
pass import for content and media, which used to scan the whole action list, building two
interpolated strings per comparison, for every single item. On a site with 10,000 two-pass items
that was tens of millions of string allocations for no reason. The action list is now indexed
once.

**Content was being exported twice on every save-and-publish.** Umbraco 18.1 raises the *saved*
notification for a save-and-publish as well as the *published* one
([umbraco/Umbraco-CMS#23523](https://github.com/umbraco/Umbraco-CMS/issues/23523)), and uSync
listens to both — so one editor action serialized and wrote the item twice. Un-publishing a
culture could manage three. All the notifications for a single operation now share a record of
what has been exported, so each item is written once.

**JSON handling moved to the Jumoo.Json package.** uSync's `JsonTextExtensions` was a copy of
that library and had drifted behind it, so uSync now calls the real thing and picks up the
correctness and allocation work that has gone into it — including a genuine bug where property
values containing a quote, backslash or control character weren't being converted to JSON at
all. `uSync.Core.Extensions.JsonTextExtensions` is still there and still behaves the same, but
every method on it is now obsolete and forwards on.

## Thanks to Henrik

Not all of this was us. Two of the changes in 18.1 came in from **Henrik at
[Impact](https://impact.dk)**<!-- TODO: check with Kevin — "Impact" is inferred from the commit
email domain (hg@impact.dk), and I don't have Henrik's GitHub handle or surname to link to.
Drop the agency mention or add the handle as appropriate. -->, who went through
uSync's hot paths and sent us a pair of very welcome pull requests:

- [#997](https://github.com/KevinJump/uSync/pull/997) — avoiding a pile of unneeded dictionary
  operations. The classic "check if the key exists, then go and get it" pattern, done once per
  item, in code that runs for every item.
- [#998](https://github.com/KevinJump/uSync/pull/998) — marking uSync's `internal` and `private`
  classes as `sealed`, so the JIT can devirtualize calls to them instead of going through a
  virtual dispatch every time, plus a move to .NET's newer `Lock` type.

Neither of them changes what uSync does at all. They are the kind of change that is easy to
overlook when you are busy building features and are looking at the same code you have looked at
for years — and exactly the kind of thing a fresh pair of eyes spots straight away.

They landed on v17 first and are ported forward into 18.1. Thank you Henrik, genuinely.

> One small note for anyone extending uSync: `SyncHandlerRoot.SyncChangeInfo` is now `sealed` as
> part of #998. It is still `protected`, so you can construct and return one from an
> `IsItemCurrentAsync` override exactly as before — you just can't derive from it any more.

---

Full details of everything in this release are in
[the changelog](https://github.com/KevinJump/uSync/blob/main/CHANGELOG.md).

<pre class="nuget">
dotnet add package uSync
</pre>

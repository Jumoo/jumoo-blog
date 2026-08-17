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

**And some smaller allocation work** ported forward from v17 — fewer redundant dictionary
lookups on the hot paths, and internal classes marked `sealed` so the JIT can devirtualize their
calls.

## One behaviour change worth reading

Handler settings now **inherit** from `HandlerDefaults`.

Previously, if a handler had its own settings block, it ignored `HandlerDefaults` completely —
you got the handler's block and the built-in defaults, and the set defaults were skipped. That
has always been surprising. Now a handler's settings are layered *over* the set's defaults, so a
handler only has to specify what it wants to change:

```json
"uSync": {
  "Sets": {
    "Default": {
      "HandlerDefaults": {
        "GuidNames": true,
        "Settings": {
          "CreateOnly": true
        }
      },
      "Handlers": {
        "contentHandler": {
          "UseFlatStructure": false
        }
      }
    }
  }
}
```

Under 18.1 the content handler above gets `UseFlatStructure: false` from its own block, *and*
`GuidNames: true` and `CreateOnly: true` inherited from the defaults. Before, defining that
block at all meant it got `UseFlatStructure` and nothing else.

The additional `Settings` dictionary is merged key by key, with the handler's own keys winning,
so a per-key default like `CreateOnly` now cascades properly too.

This is technically a breaking change, so if you have a set that mixes `HandlerDefaults` with
per-handler blocks, it is worth a look — especially if you were relying on a handler block to
*reset* things back to the built-in defaults.

While we were in there, `HandlerSettings.Clone()` also stopped dropping `CreateClean` and
`FullFileOnDifference`, which meant handlers setting either of those in their own block were
being resolved as `false` regardless of what you wrote.

---

Full details of everything in this release are in
[the changelog](https://github.com/KevinJump/uSync/blob/main/CHANGELOG.md).

<pre class="nuget">
dotnet add package uSync
</pre>

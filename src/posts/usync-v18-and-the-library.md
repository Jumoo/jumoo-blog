---
title: uSync v18 and the Library
date: 2026-06-25 10:30:00
tags:
  - uSync
  - umbraco
---

Umbraco v18 is out, and so is [uSync v18](https://github.com/KevinJump/uSync/releases/tag/v18.0.0).

Most of the time a new major version of uSync is a fairly quiet affair — we move to the new
Umbraco dependencies, deal with whatever has been deprecated, run everything through the tests
and ship it. This one is different, because v18 of Umbraco brings **Elements** and the Library,
and that is a whole new kind of thing for uSync to sync.

## Elements and the Library

Elements are Umbraco's reusable content items — content that isn't a page, doesn't live in the
content tree, and can be used in lots of places. They live in the Library, they can be published
and unpublished, and they can be organised into folders.

From uSync's point of view they are interesting because they sit somewhere between the things we
already sync. They behave a lot like content — they are publishable, they can be moved and
trashed — but they are organised like a settings item, in containers.

So v18 of uSync has a new **Library** handler that treats them properly:

- Elements are exported and imported like content, including their published/unpublished state.
- Trashed elements are handled — an element in the recycle bin doesn't come back as a live one
  on the other side.
- Element folders (containers) are exported and imported alongside the items in them.
- They appear in uSync's tree in settings, so you can browse the exported files as usual.

They sync as part of the **Content** group, and they run *before* media and content. That
ordering matters: if a page uses an element, the element needs to exist by the time the page
arrives.

> **SCREENSHOT NEEDED** — the uSync tree in Settings showing the Library/Element folder with
> exported elements in it.

## Container folders now export on their own

There is one related fix that shipped shortly after, in **18.0.2**, that is worth calling out
because it caught us out too.

Elements live in folders, and until now those folders were only written during a *full* export.
If you exported a single item — which is what happens on a dependency based push from
uSync.Publisher, for example — uSync resolved the item and wrote its file, but never looked at
the folder it lived in. The item arrived at the other end, the folder it should have been in
did not.

So we have added a new `ISyncContainerHandler` interface. A handler whose items live in
containers can now implement it and be asked to export a single container, rather than only
producing them as a side effect of exporting everything. The Library handler implements it, so
single-item exports now bring their folders with them.

If you have written your own handler for items that live in folders, this is the interface you
want:

```cs
public interface ISyncContainerHandler
{
    Task<IEnumerable<uSyncAction>> ExportContainer(Udi udi, string[] folders, HandlerSettings config);
}
```

It takes a `Udi` rather than an already-resolved entity, so the caller doesn't have to know
which Umbraco service resolves a container of your handler's type — your handler already knows
that, and does the lookup itself.

The import side already knew what to do with container nodes when it found them — it was only
the export side that needed the way in.

## Everything else

The rest of v18 is what you would expect from a major version:

- Umbraco v18 dependencies throughout, and the build warnings from the upgrade cleared out —
  we have moved off `ITemplate.MasterTemplateAlias` to `LayoutTemplateAlias`, and taken uSync's
  own copy of the legacy `{localLink:x}` parsing that Umbraco has removed, because uSync still
  needs to be able to spot an un-migrated link.
- All the fixes that have gone into the v17 line over the last few months, merged forward.
- Some quiet performance work in the IO layer — folder reading is parallelised, and a few
  list-scans in the import path have become set lookups.

## Which version do I need?

The usual rule applies — the major version of uSync matches the major version of Umbraco:

| Umbraco | uSync |
| --- | --- |
| v18 | v18 |
| v17 | v17 |
| v16 | v16 |
| v13 | v13 |

v17 is the long term support release, so it will keep getting fixes for a good while yet. If you
are on v17 and happy, there is no rush. If you are moving to v18 for Elements, uSync is ready
for you.

<pre class="nuget">
dotnet add package uSync
</pre>

As always, if something doesn't behave, [raise an issue](https://github.com/KevinJump/uSync/issues)
and we will take a look.

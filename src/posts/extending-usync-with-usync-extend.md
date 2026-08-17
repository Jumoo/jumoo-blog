---
title: Extending uSync with uSync.Extend
date: 2026-02-24 11:00:00
tags:
  - uSync
  - umbraco
  - code
---

uSync has always been extendable. If you have your own data in your own tables and you want it
to move between your environments the same way your doctypes and content do, you have always
been able to write a handler and a serializer and uSync will pick them up and treat your things
like they were built in.

The problem is that "write a handler and a serializer" has historically meant quite a lot of
code, most of which is the same for everyone. So we have added a new package, **uSync.Extend**,
which is a set of base classes to do all the boring bits for you.

## What is in the box

uSync.Extend contains two base classes:

- `SyncObjectHandler<TObject>` — the thing that controls the input/output of your data to and
  from the file system. It is what gets called when an item is saved, and when uSync exports or
  imports anything.
- `SyncObjectSerializer<TObject>` — the thing that turns your object into XML and back again.

Between them they cover the plumbing: file naming, folder structure, change detection, reporting,
the tree, the checkboxes on the dashboard, all of it. What is left for you to write is the small
bit that is actually about *your* data.

## A handler

The handler is mostly an attribute and two methods. The attribute is how uSync discovers it —
you don't need to register anything.

```cs
/// <summary>
///  the attribute set it all up. this is how it's discovered and registered in uSync
/// </summary>
[SyncHandler("MyCustomObjectHandler",
    "My Custom Object Handler",
    "MyCustomObjects",
    uSyncConstants.Priorites.USYNC_RESERVED_UPPER + 100, // after all the core things
    Icon = "icon-files",
    EntityType = "myCustomObject")]
public class MyCustomObjectHandler : SyncObjectHandler<MyCustomObject>
{
    public override string Group => "My Custom Group";

    private readonly IMyCustomObjectService _myCustomObjectService;

    public MyCustomObjectHandler(
        /* ... the usual uSync services ... */
        IMyCustomObjectService myCustomObjectService)
        : base(logger, appCaches, shortStringHelper, syncFileService, mutexService, uSyncConfig, itemFactory)
    {
        _myCustomObjectService = myCustomObjectService;
    }

    // here you would get all your items from your data source.
    protected override async Task<IEnumerable<MyCustomObject>> GetAllItems()
        => await _myCustomObjectService.GetAllAsync();

    protected override string GetItemName(MyCustomObject item)
        => item.Name;
}
```

That is the whole handler. "Give me all your items" and "what is this one called".

The priority is worth a mention — `USYNC_RESERVED_UPPER + 100` puts your handler after
everything uSync does itself, which is almost always what you want, because your objects
probably depend on doctypes or datatypes existing first.

## A serializer

The serializer needs a few more methods, but they are all one-liners against your own service:

```cs
[SyncSerializer("c61e5987-020b-4ba8-899f-957d63443ac1", // unique id, needs to be a GUID
    "My Custom Object Serializer",  // name
    "MyCustomObject")] // the object type (node name in the xml)
public class MyCustomObjectSerializer : SyncObjectSerializer<MyCustomObject>
{
    public override MyCustomObject CreateItem(XElement node)
        => new MyCustomObject
        {
            Key = node.GetKey(),
            Alias = node.GetAlias(),
        };

    public override async Task<MyCustomObject?> FindItemAsync(Guid key)
        => await _service.FindByKeyAsync(key);

    public override async Task<MyCustomObject?> FindItemAsync(string alias)
        => await _service.FindByAliasAsync(alias);

    public override Task SaveItemAsync(MyCustomObject item)
        => _service.SaveAsync(item);

    public override async Task DeleteItemAsync(MyCustomObject item)
        => await _service.DeleteAsync(item);

    public override string ItemAlias(MyCustomObject item) => item.Alias;

    public override Guid ItemKey(MyCustomObject item) => item.Key;
}
```

Find it, save it, delete it, and tell uSync what its key and alias are. Everything else — the
XML shape, the hashing, the "has this changed?" comparison — comes from the base class.

You do need a `Key` (a GUID) and an `Alias` on your objects. uSync uses the key to match items
between sites and the alias for the filename, so if your data doesn't have a stable GUID today,
that is the one bit of work you may have to do first.

## Properties by reflection

Alongside the base classes we have added `ObjectPropertyExtensions` to uSync.Core, which makes
it much less tedious to read and write properties onto an object when you only have the name of
the property as a string. It came out of tidying up our own serializers, but it is public
because if you are writing a serializer for an object with a lot of simple properties, you will
want it.

## The example project

Reading base classes is not the same as seeing them used, so uSync.Extend ships with a working
example in its `Example` folder — a custom object, a service to store them, a handler, a
serializer and a composer. It is deliberately dull: simple SQL-backed objects, no cleverness, so
you can see the shape of things without the noise.

The example is excluded from release builds, so if you install the package you get the base
classes and not our imaginary objects. To read it, go and look at
[the uSync.Extend folder on GitHub](https://github.com/KevinJump/uSync/tree/main/uSync.Extend).

> **SCREENSHOT NEEDED** — the uSync dashboard showing a custom handler group ("My Custom Group")
> alongside the built in ones, to show what you actually get at the end of this.

## Why bother?

Because "it syncs everything except *that* one thing" is a genuinely annoying place to be. If
you have built something bespoke into a site — a settings table, a set of reference data, a
custom editor's configuration — then the fact that it doesn't move with the rest of the site is
a papercut every single deployment.

We use these base classes ourselves for the smaller things we sync, and they have made adding a
new one a job of half an hour rather than half a day. It seemed unfair to keep them to ourselves.

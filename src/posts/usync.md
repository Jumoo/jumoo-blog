---
title: uSync - a simple database to disk thing for umbraco
tags:
  - code
  - Tools
  - umbraco
date: 2013-03-10 08:43:00
---

I've had an idea / issue floating about my head for a while now – how do you keep two Umbraco installations in sync? And more importantly how do your source control and Umbraco installation?

Umbraco is a really flexible and powerful CMS, and it has a lot of settings / configuration / templates going on, the real problem for me is that some of these settings and configuration items are stored in the database while others are stored directly on the disk.

On their own neither of these storage methods is a problem when it comes to storing, backing up and versioning – files are easy put them in some form of source control. Databases aren't hard either, transaction logs, db backups all play are part.

The issue when using Umbraco is keeping these in sync, how for example would you roll-back a change, to the exact right point when the change included a template (file) and a document type (db) – you’re going to have two different version control systems, finding your restore point would be “fun”.

**One Place for everything**

I think the best solutions are the ones that don’t try to do too much or be too clever – the idea I’ve had for a while it can I get all of the settings from one side of Umbraco into the other? So that’s File to DB or DB to file? All that really matters to me is one place, then I can start to keep one place controlled, it makes it all a bit easier.

Now I like databases, but really I’m a bit of an old school developer and files are my thing, so I’ve been looking at how to get the database onto the disk – this is where uSync was born.

**uSync**

At its hart uSync is just a dll that takes database settings and writes them to disk, it can also take those settings from the disk and write them to the database.

It doesn’t do version control, it doesn’t do file transfers, it just copies stuff to and from the disk –

why? Because there are already loads of tools much better suited to version control and file transfers between machines, why would I think I could do them any better.  No what I’ve done is write a database to disk – at left the controlling the results to someone else.

**Standing on the shoulders of giants**

It has to be said the idea of [uSync ](http://our.umbraco.org/projects/developer-tools/usync)is simple, and so is the code. Not because I’m some super code optimizing developer guru – I actually don’t really develop that much anymore, it’s  because most of the code already exists inside [Umbraco](www.umbraco.com).

uSync uses the Package installer functions that are already inside Umbraco to write the contents of the database settings to disk.

When you create a package, most of the settings are written to an xml file which is then placed in the package zip file along with any bits that go onto disk. When you install that package Umbraco looks at this file and imports it all into your database.

So for nearly all the Database elements Umbraco has a **ToXML** and **Import** function. All uSync does is call these toXML functions on all bits of Umbraco and write them to disk, and the other way round it reads the xml from disk and calls Import to put it into the database – it’s simple really.

**Extra Credit.**

On its own reading and writing at start up is quite cool, and would be enough to keep two versions in sync

For extra credit uSync also attaches to the save and delete events in Umbraco – on save it writes the xml to disk, and on delete, it archives the xml (should you want to restore it).

This extra step allows uSync to actually live on your dev machines, and always be in sync. With what’s going on in your Umbraco install.

For extra extra credit, we never actually delete, and on save we create a copy in an archive folder. I admit this is really cheap version control – and I said other things do this way better, but when developing having a real quick oh no can I get back that version on the disk is always useful, and it was only about three lines of code.

**Next ?**

uSync is just a simple tool, that hopefully gives developers quite a bit of power over how they control their Umbraco installations - at the moment it’s working really well with Umbraco 4.11.5 but not so well with v6 – Umbraco 6 has a lot of API changes and I suspect there is going to be other ways of getting objects in and out of the database – for now I’m trying to work out what they are.

**<span style="font-size: 1rem; line-height: 1.714285714;">[</span>Update<span><span style="font-size: 1rem; line-height: 1.714285714;">: thanks to the </span>Umbraco<span style="font-size: 1rem; line-height: 1.714285714;"> </span></span>bug fixes<span style="font-size: 1rem; line-height: 1.714285714;">, uSync works with 6.0.3 - i still want to see how the new API can be used to </span>achieve<span><span style="font-size: 1rem; line-height: 1.714285714;"> this, but for now uSync works on both main </span>Umbraco<span style="font-size: 1rem; line-height: 1.714285714;"> versions]</span></span>**

[You can play with uSync on Umbraco 4.11.5](http://our.umbraco.org/projects/developer-tools/usync) , any feedback is welcome, and also, any ideas on how to make version 6 work with the new API would be cool.
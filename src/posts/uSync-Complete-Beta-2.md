---
title: uSync.Complete - Beta 2
date: 2019-08-27 20:03:36
tags:
 - umbraco
 - uSync
---

*Delivering on our [uSync Roadmap](../usync-roadmap) we have pushed second beta release of uSync and uSync.Complete*

## uSync.Complete
We have decided to group all our expansion packs into one easy install under  uSync.Complete. 

uSync.Complete includes: 
- uSync.Exporter
- uSync.Snapshots
- uSync.PeopleEdition
- uSync.Publisher 

uSync.Complete will give you all the standard uSync goodness, but with the added extras to allow you even greater control over settings, content and media.

<pre>install-package uSync.Complete -version 8.2.0-beta2</pre>

*We have at this time pushed back the delivery of uSync.Audit. It's not a major package in the collection, and we didn't want to delay people's access to other elements*

## uSync.Publisher
In this release we are excited to be adding uSync.Publisher to the uSync family. Publisher lets you (and your editors) send content and media between Umbraco installations. 

![Sending Content and Media with uSync.Publisher](/images/usync/publisher/senddemo.gif)

Publisher is powerful and simple and we are eager to see how people use it. as such we have put together a [couple of guidance documents](https://jumoo.co.uk/usync/docs/) to help people get started but we are keen to hear from people just how they want publisher to work.

As such we have setup a [uSync.Complete forum](https://our.umbraco.com/packages/developer-tools/usync/usynccomplete/) on our.umbraco.com where we hope to gather feedback and help people to get started with everything.


#### uSync/Complete 8.2.x Known issues
- uSync 8.2.x makes some changes to the config and uSync file formats, in general these are backwardly compatible, but at this time we haven't fully tested the upgrade path from uSync 8.1.
- We have expanded the ISyncHandler interfaces quite a bit to accommodate, exporter and publisher -  We now natively load ISyncExtendedHandlers, if you have custom ISyncHandlers you should look at implementing these [extended interfaces](https://github.com/KevinJump/uSync8/tree/v8/8.2/uSync8.BackOffice/SyncHandlers/Interfaces).

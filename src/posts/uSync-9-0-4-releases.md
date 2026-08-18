---
title: uSync 9.0.4 releases
date: 2021-11-18 10:00:00
tags:
- Umbraco
- uSync
---

Today _(18th Nov 2021)_ we are releasing uSync v9.0.4 and uSync.Complete v9.0.4. with loads of updates and fixes just in time to enjoy with your Umbraco 9.1 release. 

# uSync 

For this release of uSync there have been a number of updates and fixes, you can [see them in the release notes](https://github.com/KevinJump/uSync/releases/tag/v9.0.4). 

## Sync speed improvements 🏎️⚡
The main thing most people will hopefully notice is the speed increases - we have done a little bit of optimisation work for this release and reduced the number of database hits we require during an document type import. in our test this makes a site import around 10-15% faster than before _(this does depend a bit on how much content you are importing, we actually saw even bigger improvements on some sites, but they weren't the norm)_.

# uSync.Complete 
_uSync.Complete is our turbo charged, add on package for uSync that brings you all sorts of extra features and lets you and your editors keep everything in sync from within the Umbraco backoffice._

For uSync.Complete almost all of the changes are updates and enhancements ([see release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v9.0.4) for more).

## Sending Files 🗃️

The big update for this release is the ability to sync individual .cshtml, css, and js files directly from within the back office UI. 

This means you can now right click on a stylesheet and push it to or pull it from another site.

![push-files](/images/2021/push-files.gif)

## Server seeding 🌱
We have also added the ability to seed your setup from a json file on disk. 

With uSync.Publisher v9 - we moved the server settings into the database, and you can sync the settings directly in the back office with the sync button!. 

But you still might want to setup your new site with a bunch of existing servers. and you can now do that with a usync-servers.json file. 

within the uSync.Publisher dashboard, you will see a "server json" button that can show you the current setup as a json object. 

![server.json](/images/2021/serverjson.png)

if you save this item as usync-server.json in the root of your site, then whenever you create a new umbraco site from your code these servers will be automatically added by uSync.Publisher

## Get it while its 🔥

uSync 9 and uSync.Complete 9 are available via nuget and can be quickly added to your project from the within visual studio or the command line.

### uSync:
To add uSync to your site - 

<pre class="nuget">
dotnet add package uSync 
</pre>

### uSync.Complete:
uSync complete includes: uSync.Exporter, uSync.Publisher, uSync.Snapshots, uSync.PeopleEdition and now uSync.FileEdition.

<pre class="nuget">
dotnet add package uSync.Complete
</pre>

# Documentation 📚
Since the last release we have also been working hard on bringing our documentation in line with the new uSync 9 world. and our shiny 🌟 new documentation site is now live:

[https://usync.jumoo.co.uk/docs/intro](https://usync.jumoo.co.uk/docs/intro)

the documentation is open source and you can submit suggestions and fixes via the [github repo](https://github.com/Jumoo/uSync.Docs).


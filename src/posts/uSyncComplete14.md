---
title: v14.2 - uSync.Complete 🚀
date: 2024-09-16 14:26:40
tags:
  - umbraco
  - uSync
---

A bit after the release of Umbraco v14, we are finnaly ready to announce full v14 release of the uSync.Compelte packages!

## uSync v14

uSync for Umbraco v14 has been out since the release date of Umbraco v14 and allows you to import and export all your settings between umbraco instances.

![uSync v14 dashboard.](/images/2024/usync-14.png)

v14.2 of uSync - tidies up some of the rought edges in the UI, enhances the inbuild mini-migrations that uSync does when you import from Umbraco v13 and generally is a little more solid and reliable on the latest versions of Umbraco.

## uSync.Complete v14.2

The first full release of uSync.Complete for Umbraco v14 is version 14.2 - we have done this because the uSync.Complete release requires Umbraco v14.2 and so the versions are unified.

uSync.Complete v14 contains all the same packages as previous versions of uSync brought upto date for the new Umbraco UI and inline with backend v14 code changes

![uSync Publisher but in v14!](/images/2024/publisher.png)

### Jumoo.Processing Engine.

Under the hood, uSync.Complete v14 is using our new internal processing engine that manages long running multi-step processes within umbraco and offers us a lot more flexiblity in how we run things within all of the uSync.Complete packages.

The processing engine is probibly the main reasons why we've had a bit of delay in getting uSync.Complete ready for Umbraco v14 but it does mean that going forward we have a solid platform to add and manage the complex processes in uSync.Complete (and we are going using the same processing the engine for Translation Manager!)

_At this time we don't think we will be opening up the processing engine as its own package, but maybe once we've gotten our packages out we might polish some docs and get it out there._

### Existing Licences will work!

uSync.Complete licences work for a Long Term support release (LTS) and all following Short Term Support (STS) releases, as such if you have an uSync v13 licence then that will work with uSync.Complete on Umbraco v14.

> _note if you purchased your uSync.Complete licence before 1st Oct 2023 then that will have been a v10 LTS licence and you will need to purchase an upgrade to work with v13 and above._

### Get the Package now.

You can install the uSync.Complete package on your Umbraco v14 site(s) now. without a licence you get a 60 trial to try out all the features and see if it works for you!

<pre class="nuget">
dotnet add package uSync.Complete --version 14.2.0
</pre>

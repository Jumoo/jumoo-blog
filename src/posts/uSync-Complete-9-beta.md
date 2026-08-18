---
title: uSync.Complete 9 beta
date: 2021-07-08 11:00:03
tags:
  - uSync
  - umbraco
---

The Umbraco 9 Release candidate is out 🎉 you can read all about it on the [official Umbraco blog](). We've already announced today that the [Release Candidate for uSync 9 is out](../uSync-9-releases) too. 

but we are even more super excited to announce the beta release of uSync.Complete for Umbraco 9. 🎊✨🧨🎇🎆

## uSync.Complete beta 1

This uSync.Complete beta sits upon all of the great work we've all ready put in for the uSync release candidate and then adds all the features you expect from uSync.Complete all for Umbraco 9. 

### Publish content between servers. 
uSync.Publisher lets you push settings, content and media between umbraco sites, without having to leave the back office. 

### Pack and Unpack up your site between installations
uSync.Exporter lets you export your whole site or just a bit of your site between servers. so you can develop a feature for your site on onw install and pack it up and move it to another. 

You can even use uSync.Exporter to take a feature from a completely different site and import it into another. the Dependency management features will find all the doctypes, datatypes and settings you need to implement a feature and include them in the sync-pack file.

### Move files between Umbraco 8 and Umbraco 9 sites !
because we've worked hard to ensure uSync 9 is backwards compatible so is uSync.Complete 9. and this means you can push and pull content, media and settings between Umbraco 8 and Umbraco 9 sites - directly from within Umbraco !!

![Publish from Umbraco 8 to 9 (or the other way around!)](/images/2021/eighttonine.gif)

### Sync publisher settings between servers.
One of the big changes in Umbraco 9 (well in netcore really) is how settings are managed. the centralization of settings, and how netcore builds your appsettings from multiple sources means its not really practical for us to store all of the uSync.Publisher settings on disk anymore. 

As such we have moved a lot of the publisher settings (and all the server settings) to the database. and add the ability to sync these server settings between servers. 

This should make it much easier to configure and manage your farm of servers. and it means that the only required settings for uSync.Complete on disk are now the AppId and AppKey settings that digitally sign and authenticate all traffic between servers.

## Try it out

So you can install uSync.Complete 9 now on your Umbraco Release candidate builds.

<pre class="nuget">
dotnet add package uSync.Complete --version 9.0.0-beta003
</pre>

**note:** *we have had a few private beta releases before this so we are actually publishing beta003*

Leave us feedback on the [uSync.Complete github repo](https://github.com/Jumoo/uSync.Complete.Issues).

### Licencing
We haven't finalized how uSync.Complete will be licensed yet - the beta will run for an extended 120 days so plenty of time to try it out and see if it suits you, as we near release candidate we will finalize the licencing and pricing details. we can say we expect the price to be close to the current uSync.Complete v8 pricing.

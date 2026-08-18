---
title: Translation Manager 9 Beta
date: 2021-08-12 16:02:02
tags:
 - Umbraco
 - translations
---

Continuing our goal of getting all of our package working with the Upcoming Umbraco 9 release. We are super happy to announce the release of Translation Manager 9 Beta for Umbraco 9 🔥 **and Umbraco 8 🎉**.

### For Umbraco 9 on .NetCore 5.0

<pre class="nuget">
dotnet add package Jumoo.TranslationManager -v 9.0.0-beta002
</pre>

### If you are running Umbraco v8

<pre class="nuget">
install-package Jumoo.TranslationManager -version 9.0.0-beta002
</pre>

## What is Mult-targeted 🎯🎯 ? 
Multi-targeted packages work with both Umbraco v8 on the .netFramework and Umbraco v9 packages running on .NetCore. 

Typically (and for us) this is achieved by targeting the code to both framework versions and having conditional statements where the implementations differ. 

Translation Manager is our first major Multi-targeted package, where the same code base works for both Umbraco v8 and Umbraco v9. which means we can keep updates and fixes in sync between the Umbraco versions without having to maintain two code bases. This will allow us to offer better and longer support for Translation Manager on both versions.

![It isn't a multi-targeted release without the side by side pick](/images/2021/tm-sidebyside.png)


## What's New ? 🌟
If you are running Translation Manager v8 on Umbraco v8 then the answer is not much. 

We have been aiming for a minimal change release, So there are no new features in Translation Manager v9. 

In fact for now we would recommend you continue running Translation Manager v8 on live sites. 

> *It is likely that existing connectors will not work directly with Translation Manager v9, but only in minor ways - We will announce what changes will be required soon*

## V9 Changes 🎈
While the Umbraco v8 version has changed little, there are some changes for the v9 version of Translation Manager that are needed to make it work in the .NetCore world.

### AppSettings.json 
Settings have changed quite a bit in Umbraco 9 - so gone are all the individual configuration files - Configuration is now managed in the appSettings.json file (which is built dynamically from several sources when your site is running)

Translation manager's settings now live in this file, but with sensible defaults you may never need to actually add them to the file. 

### Connector Settings are in the DB
We have moved provider settings to be stored in the Database - Often connectors have many more settings that need to be configured based on how they will be used on your site. 

So we have moved these settings into the Database. There will still be a way to read them from disk (as part of appsettings.json) - but the Database will be the preferred way to save these settings. 

## Licencing 
We have still to finalize the licencing model/pricing for Translation Manager 9 - but we can say the following: 

- **Umbraco v8** : An existing v8 licence will continue to work on Translation Manager v9
- **Umbraco v9** : Will require a new licence key to use Translation Manager v9

## Final Release date 

Our aim is to release our packages as close as possible to the final release of Umbraco v9. We expect our Translation Manager v9 release to be within a few days of the Umbraco 9 release 

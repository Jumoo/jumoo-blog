---
title: 2023 January Package Updates  
date: 2023-01-12 11:00:00
tags:
- uSync
- umbraco
- translations
---

Today (12th January) Umbraco released updates for Umbraco 10 and Umbraco 11. So in keeping with tradition we have also released patches for our packages.

There is nothing major in any of these releases we have just been gathering fixes and minor updates and it didn't seem prudent to release them until we where sure that nothing in the 
new Umbraco releases required us to update anything else . 

# uSync
*Minor fixes mainly to do with multi-url pickers in doctype grid editors.*

- [v11.0.1](https://github.com/KevinJump/uSync/releases/tag/v11.0.1) - Patches some issues with dotype gid editor things.
- [v10.3.2](https://github.com/KevinJump/uSync/releases/tag/v10.3.2) - Patches the same issues as v11 also some of the late fixes that where in v11 but not v10.

# uSync.Complete
*Minor fixes to how user accounts are synced*

- [v11.0.1](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v11.0.1) - Fixes some issues when syncing users with People edition
- [v10.4.0](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v10.4.0) - Fixes the user issues, and some variant publishing things when you publish from sites that have less languages installed then the target site does.

*the v10 release means that both the latest versions uSync.Complete now also support our new Subscription licence keys, which will mean we can soon start offering agency licence holders keys that don't change when subscriptions are updated - which will be nice for us all!*

# Translation Manager
*really small issue with Xliff 2 serialization*
- [v11.0.2](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v11.0.2) / [v10.1.4](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v10.1.4) / v9.1.6 

Fix an XLIFF 2 issue where a nested spanning code containing no content has a rouge empty subtype attribute and it shouldn't (and if you don't know what that means, then its not an issue to worry about!)

/// 

*And that is 84 nuget packages released across 7 repositories and 3 Umbraco versions - so we are going to have a cup of tea ☕*



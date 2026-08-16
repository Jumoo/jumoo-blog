---
title: uSync 9.4 - First boot 🥇🥾 and Site Seed 🌱
date: 2022-04-26 07:42:25
tags:
- Umbraco
---

Today we are happy to announce the latest [uSync](https://github.com/KevinJump/uSync/releases/tag/v9.4.0) and [uSync.Complete](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v9.4.0) release v9.4.
 
 For this release we've been working hard on making it easier to setup and clone a project using uSync or uSync.Complete and hopefully this release will have something to help you and your to get sites up and running quicker and with less fuss.

 ## First Boot 🥾🥇 (uSync)

 *For more info see : [First boot Documentation](https://docs.jumoo.co.uk/usync/uSync/key_topics/firstboot/)*

 First boot, is a set of options that allow you to quickly and easily get a copy of your site up and running. Whether that is cloning a site for the first time source control or publishing your site on the internet for the first time - first boot allows you to define what uSync does the very first time the site starts. 

 When setup first boot will sync your choice of settings, and/or content from disk when the site first runs after installation. 
 
 > This means you can clone a site from source control, 
 run the install locally and have your site up and running without having to run any imports or setup

 First boot also replaces the no-nodes screen that umbraco shows when you have an empty site, so you can see if there is anything on disk waiting to be imported, or indeed read more about first boot in the docs. 

 ![First boot](/images/2022/firstboot.png)

 
 ## Site Seed 🌱 (uSync.Complete)
 *For more see : [Site Seed Docs](https://docs.jumoo.co.uk/usync/complete/publisher/siteseed/)*


 Site Seed for uSync.Complete is First boot's trendy cousin it allows you to seed a site from an existing server (via uSync.Publisher).

![Site Seed](/images/2022/siteseed.png)
 
 You can define a seed URL which site seed will then use to gather the uSync.Publisher settings, and when the site boots up with no content. Site seed will offer you the opportunity to sync settings, content and media from the seed server so you can get a clone of a site in a few simple steps. 

![Site Seed Sync Options](/images/2022/siteseedoptions.png)

## Find out more

You can read more and see how to setup both First boot and site seed in our docs.

- [First boot in docs](https://docs.jumoo.co.uk/usync/uSync/key_topics/firstboot/)
- [Site Seed Docs](https://docs.jumoo.co.uk/usync/complete/publisher/siteseed/)

## Releases

As with all uSync & uSync.Complete 9.x releases v9.4 works will all versions of Umbraco 9 and you can find out more in our release notes for each of the products.

- [uSync 9.4 release notes](https://github.com/KevinJump/uSync/releases/tag/v9.4.0)
- [uSync.Complete 9.4 release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v9.4.0)
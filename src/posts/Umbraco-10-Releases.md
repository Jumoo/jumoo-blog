---
title: Umbraco v10 package releases
date: 2022-06-20 10:15:17
tags:
 - Umbraco
 - uSync
 - translations
---

With the release of [Umbraco 10](https://umbraco.com/products/umbraco-cms/umbraco-10/) we are happy to announce v10 versions for most of our packages: 

- [uSync v10](https://github.com/KevinJump/uSync/releases/tag/v10.0.0)
- [uSync.Complete v10](https://jumoo.co.uk/usync/complete/)
- [Translation Manager v10](https://jumoo.co.uk/translate/download/v10/)
- [Backoffice Themes v3](https://www.nuget.org/packages/Our.Umbraco.BackOfficeThemes)
- [Maintenance manager v10](https://our.umbraco.com/packages/backoffice-extensions/maintenance-manager/)
- [Linked Pages (no update required)](https://our.umbraco.com/packages/backoffice-extensions/linked-pages/)

There are still a few packages we have left to convert but they are coming soon. 

# uSync and uSync.Complete for Umbraco 10.

uSync and uSync.Complete are now fully compatible with Umbraco 10 and include all of the features from our v9 versions, including [first boot and site seed](https://blog.jumoo.co.uk/2022/Nine-four/), [Real time compare](https://blog.jumoo.co.uk/2021/uSync-8-9/#%F0%9F%A7%AC-Real-time-compare-trade) and [individual item pushing](https://blog.jumoo.co.uk/2021/uSync-9-0-4-releases/#Sending-Files-%F0%9F%97%83%EF%B8%8F).

![First boot](/images/2022/firstboot.png)

As with most of our package we have converted uSync and uSync.Complete to be Razor class library projects, which means you will no longer see uSync or uSync.Complete files in your app_plugins folder while developing.

**We recommend you do a dotnet clean after upgrading uSync or uSync.Complete to ensure there are no old v9 files left hanging around.**

# Translation Manager v10

Translation Manager v10 release also contains all the existing features of our v9 products, and most of our [existing v9 connectors](https://jumoo.co.uk/translate/providers/) still work with the v10 release. 

![Translation Manager](/images/2022/tm.gif)

We are currently testing our connectors with the v10 release but so far they all seem to be working well, we will release updates via our translation partners as we verify each of the connectors. 

# Backoffice Themes
Backoffice themes lets you change your theme for the backoffice. 

![Backoffice themes](/images/2022/themes.png)

# Maintenance Manager 
Maintenance manager lets you put your site into maintenance mode, and perform a content freeze so your content editors can't change things while you do critical updates. 

![Maintenance manager](/images/2022/maintenance.gif)

**Maintenance manager is jointly developed and maintained with [Aaron Sadler](https://github.com/AaronSadlerUK)*

# Linked Pages (No Update Required)

Our [Linked pages package](https://our.umbraco.com/packages/backoffice-extensions/linked-pages/) does not require an upgrade to run, so the v9 versions works with v10, and you will not require an update. 

# More Soon.

We are currently working on the following packages and expect to have v10 releases verified in the next few weeks. 

- [uSync.FormsEdition](https://jumoo.co.uk/usync/forms/)
- [Vendr uSync](https://vendr.net/add-ons/vendr-usync/).

.


#v10AllTheThings


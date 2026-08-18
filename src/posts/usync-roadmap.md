---
title: uSync Roadmap
tags:
  - code
  - Tools
  - Umbraco
  - uSync
date: 2019-07-19 12:00:00
---


# uSync 8 Roadmap 
The release of Umbraco 8 gave us an opportunity to re-organise and redevelop uSync into a more stable and flexible platform, that will enable us to get much more from it and add loads of extra features and capabilities without radical changes to the core product. 

Going forward it is our intention to have two development streams for uSync the Core Product stream will include uSync and uSync.ContentEdition - this the the packages that open source and available now. 

The second Stream will be for uSync Expansion packs, which will add functionality to uSync and let you do other cool stuff. the Expansion packs will be paid for add-ons* for usync, hopefully licencing these add-ons will help us to provide continued support for all elements of uSync.

**We have yet to fully work out the licencing model for expansion packs, it's likely there will be a one off 'agency' style licences either for an individual expansion pack or all expansions in one 'uSync Deluxe' deal* 

## uSync and uSync.ContentEdition
uSync and uSync.ContentEdition are released and ready for Umbraco 8.x, we will continue to support and develop these core products. the main development for these will be in writing new DataTypeSerializers and ContentValueMappers for community umbraco property Editors as an when they are needed (All core property editors use GUIDs for storing references and this greatly reduces the need for these mappers)

## uSync Expansion Packs
Expansion Packs will be add ons to the core uSync product that bring extra features, **these will be paid for addons** 

![Extension Apps](/images/2019/extensions.png)

### uSync.Snapshots
Point in time snapshots of your Umbraco installation.

take a whole instance snapshot of your umbraco site - snapshots can be copied between installations (manually) and applied either in part or as a whole collection where multiple snapshots are rolled up and all changes applied to your site. 

![Snapshot Dashboard](/images/2019/snapshots.png)

### uSync.Exporter
Export Settings & Content into a single portable file that can then be imported into another umbraco installation. 

The "Sync Pack" files contain all the settings and dependencies for anything you export; so for example you can pack up your doctype with the dependent datatypes. when you import to another site - all the datatypes are updated before the doctype is imported meaning everything comes in as expected. 

![Importing a Sync Pack](/images/2019/import-syncpack.gif)

### uSync.PeopleEdition
Export Members, Member Groups, Umbraco Users and User Groups just like they other settings on the site. 

### uSync.Publisher
Right click and "publish" content between umbraco sites, this will require full syncing between sites, but will let you push (& pull) content between umbraco sites, great for getting things like content from live back to staging. 

### uSync.Audit
keep track of who is making what changes to your umbraco installs. will track just what changes when someone updates a setting and keep it in a log, ping it via email or integrate with slack so you can see what's happening and maybe ask someone why. 

![Audit Messages in Slack](/images/2019/auditslack.png)

## Releases

### Core Product Frequent Patch and Feature Releases
Our aim is to have frequent releases of the core products once every 3 months, this will of course depend on there being bugs to fix ! As we currently do major functionality bugs will be fixed as soon as possible and new releases may occur to address them. 

### Expansion Packs
We are currently working on the expansion packs and are aiming to have beta releases for most of them by September 2019 - the beta program will be open to all, but probably time limited before a first release of expansion packs for the end of the year. 

## Feedback
As always we would love to get feedback on uSync, our ideas for the expansion packs and the roadmap. If you have anything you want to share, please get in touch either via twitter or email us usync@jumoo.co.uk

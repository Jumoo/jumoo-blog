---
title: uSync Exporter - Beta 1
date: 2019-08-08 11:08:56
tags:
 - umbraco
 - uSync
---

*Delivering on our [uSync Roadmap](../usync-roadmap) we have pushed the first beta releases out for a number of the uSync Expansion Pack packages.*

*These first releases give us an opportunity to show you our progress and get some feedback on the things we are doing.*

## uSync.Exporter
Export / Import uSync 'Sync-Packs' that contain all the settings/content/media 
required to get something from one umbraco installation to another. 

At the simplest level, you could choose to export the home node of your site
include all dependencies, children, and files and you will get a sync pack
containing all the content, media, document types, DataTypes and associated bits
to rebuild your site on another umbraco installation. 

### Dashboard Export/Import
You can control the import/export of your sync-packs from the uSync.Exporter
dashboard. once installed you get an extra exporter icon

![Exporter icon](/images/usync/exporter/exportericon.png)

and the exporter dashboard lets you see all the things you can do. 

![Exporter Dashboard](/images/usync/exporter/exporter.png)

### Action Menu Export to Sync Pack
In addition to the dashboard you can also export via the 'action' (right-click) menu on things like document types and datatypes 

![Exporting via the menu](/images/usync/exporter/exportaction.png)

from here you can export single items, or whole folders, these sync-packs will contain the same information as ones created via the dashboard and can be imported either via the same action menu or via the dashboard.

### Whats in a sync-pack
When you export via Exporter you will get a sync-pack file with a `.usync` extension. so what is this file and whats in it?

a `.usync` file is essentially a zip file containing all the settings and content needed to transport your stuff to another umbraco site. 

this will contain of two main elements:

1. The `usync` folder contains all the settings you have exported - its just like a cut down version of the usync folder in your site. 
2. depending on what options you pick you might see `media` and `view` folders in a usync file, these are just what they look like, the elements of the media and views needed to recreate meida and templates. 

![inside a .usync file](/images/usync/exporter/syncpack.png)

*When you import a sync-pack uSync.Exporter will take this information and recreate the site, supporting things like blob storge for media and making sure templates are created both on disk and in the database.*


#### Known issues
As with most beta releases we know of a couple of issues. these will either be addresses or removed before release

**Issue/Bug/Statement of Fact: No template dependencies**

At the moment we calculate dependencies all the way down to the template level but not beyond, that means we don't calculate what partial views or embedded macros in templates that your site might require.

Working on very similar principles to uSync we are sort of assuming that you are handling the transfer of the files between your umbraco installs. so views, css app_plugins etc, are things you are already in control of. 

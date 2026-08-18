---
title: v12.2 - 'Super' Tweaks
date: 2023-09-27 12:24:00
tags: 
- uSync
- Umbraco
---

Along with all the other amazing features in the new uSync.Complete v12.2 release, we snuck in a few cool little tweaks to make life a little bit smoother for developers and editors using uSync.Complete. 

## Content Button Customization
Traditionally Umbraco allows editors to preview, save and publish content from the bottom of the content page, and this makes perfect sense when you have one Umbraco site and its serving your live content.

Once you have stage/QA Servers it doesn't necessarily make sense for there to be a publish button or even a save one. So with uSync 12.2 we now have given you the ability to edit what buttons a user sees and what they say all from your `appsettings.json` file. 

So for example, if while on a QA server you might not want the ability for the user to schedule content, or indeed to preview or save. you might just want them to publish on the QA server so they view it directly, before pushing or pulling content live. 

The following settings do that:

```json
"uSync": {
  "Publisher": {
    "Settings": {
      "Buttons": {
        "PublishButtonLabelKey": "publishButton_publishLocally",
        "HideSaveButton": true,
        "HidePreviewButton": true,
        "RemoveScheduleOption": true
      }
    }
  }
}

```

This results in the users seeing just a 'publish locally' button (and the uSync and un-publish options in the menus).

![Customized content buttons](/images/2023/v12-buttons.png)


## Ignore Sort Order 

uSync syncs everything and thats why your sites are always the same on both sides of a push or pull, but sometimes you don't want it to be in exactly the same place. 

Ignore Sort Order is something that has been recently added to the core uSync, and it lets you tell uSync not to worry about the sort order for items that are imported. 

This is useful if you are syncing to a site that already has content or a bit of something that isn't on your source site. When you do that, the sort order for the content or media may never truly sync up (because of extra bits on one side or the other).

Ignore Sort Order tells uSync that you think the sort order will never be right, and not to include it as part of the sync. 

![Advanced server options - Ignore sort order](/images/2023/ignore-sort.png)



## uSync Tree View. 
With all the cool new things getting added to uSync we thought the left hand menu was getting a little long, so with v12.2 we've nested lots of the features beneath the uSync menu item.

![New uSync Tree](/images/2023/v12-tree.png)

This means uSync takes up less space in the menu, its easier to find each individual part, and you can now deep link to things like uSync.Exporter (which was harder before as it was a tab on the uSync dashboard).

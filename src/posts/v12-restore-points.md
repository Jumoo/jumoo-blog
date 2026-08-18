---
title: v12.2 - Restore Points
date: 2023-09-27 12:21:00
tags: 
- uSync
- umbraco
---

New in uSync v12.2, restore points let you create a point in time backup of your site that you can then rollback to should you need to revert any changes you have made. 

![Restore points dashboard](/images/2023/restore-point-dashboard.png)

## Restore Points
Restore points are a point in time view of your site, they contain everything you need to get your site back to where it was when the restore point was made. 

### What is in a Restore Point? 
A restore point is an archived file, of all yours site's settings, content and template files. This includes all the things uSync will sync + .cshtml, css, and js files in the wwwroot, wwwroot/css. wwwroot/scripts folders. If you choose it can also include all of your media. 

### Where are Restore Points Stored?
Initially restore points will be stored in the site's `/uSync/restore` folder but this can be configured in the configuration and **we have an Azure blob storage provider so you can push your restores into the cloud**.

# Create Restore Points.
You can create restore points in several different ways: 

## 1. Via the Restore Dashboard. 
You can go to the restore dashboard (under the uSync tree in settings), and from there click the big friendly green button. 

![Create a restore point](/images/2023/restore-point-create.png)

When creating the restore point you will be asked if you want to include media files. As you might have lots of media and some of it may be large, this can slow down restore point creation by quite a bit. If your media is already backed up (e.g via blob storage) then you won't want to pick this option.

## 2. During a Push/Pull Operation
- You can configure uSync.Publisher to create a restore point each time you push or pull content. 
- uSync.Publisher will detect when you are making potentially damaging changes, and prompt you to create a restore point. 

![Publisher prompting to create a restore point](/images/2023/restore-point-prompt.png)

*Restore points are created on the target site (the one you are pushing too, or the site you are pulling to).*

> **What is a 'Damaging Change'?** 
>
> uSync will keep your sites in sync and in general that is what you want, but there are changes you can make to a site that can have wider implications then the content or settings you are syncing. When this happens uSync.Publisher will tell you. 
>
> An example can be if you delete a property in a ContentType then when that element is Synced with another site, Umbraco will remove any content associated with that property from all pages that might be using it. 
> So if you where to delete the `pageTitle` property from a content type you might loose all your page titles. 
>
> Creating a restore point before changes like this, can protect you from losing content you might not be expecting to be removed.

### 3. Before a Sync-Pack Import
Before you import changes from a Sync-Pack file using uSync.Exporter you are now given the option to create a restore point. 

![Sync-Pack import options](/images/2023/restore-point-exporter.png)

Creating an restore point before a big import gives you piece of mind should it do things you are not expecting. 

# Restoring to a Restore Point 
Should the worst happen and you need to rollback to a restore point, you can do this via the Restore Point dashboard. 

![Restore points dashboard](/images/2023/restore-point-dashboard.png)

Simply select the restore point you wish to rollback to (or click on restore latest) and you will be given the opportunity to run a report on the restore point: 

![Restore point dialog](/images/2023/restore-point-check.png)

Running a check will report the changes that would happen should you choose to run the restore point.
Once checked you can view the report to view any changes, and if you want you can even create a pre-restore restore point, so you can roll back the changes from the restore point if you need to 🤯.

![Restore point report](/images/2023/restore-point-report.png)


## Cloud Based Restore Points
By default restore points are saved in the `uSync/Restore`` folder of your site. This might be fine for a lot of situations, but we thought it might be helpful to allow restore points to be put somewhere else. 

So alongside this release, the uSync.Complete.Restore.Azure package, allows you to put the restore point into azure from config. 

```json
"uSync": {
  "Restore": {
    "Storage": {
      "Azure": {
        "ConnectionString": "**** YOUR AZURE CONNECTION STRING ****",
        "ContainerName": "**** YOUR AZURE CONTAINER NAME ****"
      }
    }
  }
}
```
--- 
Restore points are part of uSync v12.2 which is currently in pre-release.

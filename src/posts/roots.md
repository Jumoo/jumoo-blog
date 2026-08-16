---
title: Introducing uSync Roots 🌳
date: 2024-01-23 22:05:27
tags:
 - uSync
 - Umbraco
---

Ever wanted to build a new site that was just like that other site you built? or do you have loads of sites that almost the same and it would be good if you could have some sort of central base site that you could base them off and keep in sync with?

Well, yes, the idea of a baseline or blueprinting isn't new in Content Management or even Umbraco land. but now, after mainly not getting around to it for years - We are very proud to announce uSync's own "blueprinting" solution - uSync Roots 🎉.

uSync roots is fully integrated into the core uSync solution (so its part of the free bit!) you can download a beta build now, and see how and if could help you keep control of your Umbraco sites.

# How uSync Roots works

uSync Roots lets you have a root (or many roots) sites that you can then base other sites on, and with those other sites you can either overwrite or sync them back to your root site as and when you feel like you need to. 

Root sites, put their files in `/uSync/roots`. and 'child' sites behave like normal sites and put their files in `/uSync/v9`.

The magic happens when you import or export from the child site. 

## Importing with uSync Roots
When importing uSync will auto-magically merge the `uSync/roots` and `uSync/v9` trees into one Seamless uSync import - meaning you get both the changes from the root site and the changes from the child site all in one. 

## Saving/Exporting with uSync Roots 
When you save on your child site, depending on your settings uSync will either save a copy of your changes the `uSync/v9` folder or it will stop you from making the change.

Files in the `uSync/v9` folder take precedence, so a change on the child site will overwrite a change on the root site. 

## "Fancy" merging
So when you make a change on a child site it will overwrite the change you might have made on the root - changes on the child win.

But we thought, what if you want to add a new property to a content type on a child site and you still want to get any updates from the root site ? 

Well with "fancy" merging, you can do that. 

Fancy merging means when you add a new property to a content type on a child site, uSync will store just that property change and not overwrite the settings from the root content type. 

Then when it comes time to import, uSync merges the two sets of properties for the content type together, and you get a combination of what you have on the child site and what you have on the root! 

This works for deletes too! you can delete a property that was set on the root, and still get all the other root properties and updates through to your site!

![Fancy merge lets you add properties on child sites and still get updates from the master for exiting or new root values](/images/2024/propertymerge.png)

Its life changing, but there is more !

We started with fancy merging on ContentType properties, and then we added MediaType and MemberType properties (because they are a basically the same internally 🤷), but then we thought could we go any further ? 

## 'Fancy' DataType config merging 
Fancy merging for DataTypes allows us to blend together configuration from both the root and the child sites so you get a mix of the things you setup on your root, and extra you might want to add for a child site. 

Now this might not ,ake sense for a lot of DataTypes - but for things like BlockLists and BlockGrids its really cool.

## BlockList/BlockGrid merging.

You can have a core set of blocks defined in a BlockList on on your root site, and then you can add to that list on your child site. 

What happens if you add new blocks to the root ? well when you import them to the child site they are added straight in and you get to keep your additional child blocks too! 

![A merged block Grid, showing parent and child blocks in one](/images/2024/mergedblocklist.png)

Out-of-the-box, uSync roots will fancy merge, BlockLists, BlockGrids, and imageCroppers, we 
will probably add the other listy things too before final release. 


# Getting started. 

We are in early access preview, you can install our beta for Umbraco 13.1 and get playing with roots. 


<pre class="nuget">
dotnet add package uSync --version 13.1.0-beta01
</pre>

## 1. Create a "Root" site. 

you root site is defined with a setting in `appSettings.json``.

```json
{
    "uSync": {
        "Settings": {
            "IsRootSite" : true
        }
    }
}

```

Cleaning out the uSync folder and performing an export will get you your `uSync/root` folder.

### 2. link a "Child" Site
Your child site just needs the `uSync/root` folder copying into it. and its good to go.

by default the child site will be locked from overwriting root items, and won't let you 
save the changes in the UI. you can disable this behavior by setting `LockRoot` to false in the config of the child site.

```json
{
    "uSync": {
        "Settings": {
            "LockRoot": false 
        }
    }
}
```

That the quick guide really, when you want to update a child site copy the root folder to its uSync folder and import. 

> **top tip:** uSync roots default config makes it work for one root, but it actually can have many. You can define a set of folders in the `Folders` setting and uSync will merge them all (first -> last, so last folder takes precedence.)

# What's next?
We are looking for feedback and people to test the roots functionally, and we are also looking into how we might help people diagnose and understand how the roots and child sites are working together. 

In the world of uSync.Complete we think we might have a roots dashboard where you can remotely pull down the root from another site (along with views, js files etc) and then run the import, but that is probably a bit off, and likely at this stage to be a v14 thing. 

So please test, give us feedback, and hopefully this will become another valuable tool for people keeping all those sites in sync. 




---
title: uSync.Platform.Beta
date: 2022-08-12 06:10:01
tags:
- Umbraco
- uSync
---
# Platform tools from uSync ♾️
We have been playing around with the idea of having some simple 'platform' style tools packages for ages, and now we have finally gotten some of them at least into a state where we can let people play with them and maybe tell us if we are doing anything people might want. 

## Testers / Feedback required 

**TL:DR uSync.Platform tools beta can be downloaded from our public 'nightly' feed, and includes tools like Backup and Restore, SiteSync and the new uSyncCli**

First you have to [connect to our nightly feed](https://dev.azure.com/jumoo/Public/_artifacts/feed/nightly/connect/dotnet). Which can be done by adding a nuget.config file to the root of a project

Then you can add the package via the `donet add package` command

<pre class="nuget">dotnet add package uSync.Platform --version 10.0.0-rc1</pre>

Feedback [via the uSync github page](https://github.com/KevinJump/uSync/issues/new?assignees=&labels=beta-feedback&template=beta_feedback.md&title=%5BBETA+FEEDBACK%5D), or and social media channel you choose. 

At this point we want to verify that the things we are building make sense, work as people might expect them too and are well going to help people.

**These packages are 'beta' releases - as such do play around with them - but we would recommend you don't use them on production sites/deployments just yet!**

# The Tools!
The platform beta has a number of tools with the idea of helping in different ways, some of them compliment other things we already do, while some are new ways of thinking about how to mange your site and data. 

## uSync.Backups.
The first tool allows you to create, download, import and restore backups to you site. This means you have a simple way to get a backup of how you site looks now and restore it either locally or onto another site installed somewhere else. 

![Platform Backup](/images/2022/platform-backup.gif)

## uSync.SiteSync
Site sync is like a baby uSync.Publisher for admins. While uSync.Publisher has immense power and can work out dependencies between items you want to sync. Site sync simply syncs settings, content or files between sites, and doesn't bother you with any nuanced questions. 

![Platform Sync](/images/2022/platform-sync.gif)

Platform sync offers three options, sync settings, content or files - you can choose any or all of these and those items will be pushed between sites. 

***before the sites can communicate you will need to add a shared key in the appsettings.json file - when you first run the site settings dashboard on a server it should prompt you with instructions on how to do this***

## uSyncCli
A command line - not just for uSync but for any Umbraco command you might want to run. 

![Command Line](/images/2022/platform-cli.png)

The command line is the first step in making many parts of uSync more "automatable" - pushing between sites, or creating backups with the back up tools are already possible with this tool and we will be looking to add more uSync.Complete commands, like publish to the list too. 

But the command line also supports any command you might want to run, for example rebuilding the examine indexes or reloading the memory cache. We are looking at adding many more commands like this and will be pushing some documentation out soon showing you how you can add your own commands. 

If you have [our nightly feed added as a source](https://dev.azure.com/jumoo/Public/_artifacts/feed/nightly/connect/dotnet) to you nuget list you can add the uSync command line dotnet tool

<pre class="nuget">dotnet tool install --global uSync.Cli --prerelease</pre>

Once you have the tool you will need to generate a key, that you can add to a server so it can be connected too. 

```cli
PS> uSync servers key-gen
 ***** uSync CLI ******************************************************
 * Beta - This command line is very much beta - issues maybe features *
 **********************************************************************

Key: pRa9RvNfumzuCX6U8FiQK7/Rsx3pcT6c32TyB897gsA=

You will need to set this key in your servers appsetting.json file

"uSync": {
  "Commands": {
    "Enabled": true,
    "key": "pRa9RvNfumzuCX6U8FiQK7/Rsx3pcT6c32TyB897gsA="
  }
}

When running commands this value should make up the -key part of the command e.g
 > uSync run info -s servername -k pRa9RvNfumzuCX6U8FiQK7/Rsx3pcT6c32TyB897gsA=
 ```

***don't use our example code, run the command for yourself and get your own key***

Once you have this key setup you can communicate between servers, start by looking at the 
`uSync servers` and `uSync list` commands  


*At the moment you might be aware of uSyncTriggers package which allows you to trigger uSync import/exports from the command line, the uSyncCli is the next generation of that tool, with a much more generic code base so we can add loads of commands and a robust way to handle multiple step processes which means we can run some of the more complex commands (like a uSync.Publisher publish command) through it - it is much more powerful than uSyncTriggers and will hopefully give us lots more options.*

# Future direction
We honestly do not know where these tools are going to end up at the moment - some of them might end up being merged into the free [uSync codebase](https://github.com/KevinJump/uSync), while some might end up in [uSync.Complete](https://jumoo.co.uk/usync/complete/). Its highly possible there might be a middle ground and we make an intermediate thing between uSync and uSync.Complete with a load of tools to help deployment etc. 

*As we don't quite know what we are doing with these packages yet, the current releases are time limited (they will work until Nov 2023), this is so we can ensure people upgrade upon any release and if we decide some of these elements become part of a paid package we can ensure they are not also floating around for free!*

At the moment we are really seeking feedback and ideas on how to take these experiments forward. we also have a couple of ideas including source control management and azure tools in the back office, but they haven't quite made it to this release yet. [If you have any ideas or feedback do let us know](https://github.com/KevinJump/uSync/issues/new?assignees=&labels=beta-feedback&template=beta_feedback.md&title=%5BBETA+FEEDBACK%5D)

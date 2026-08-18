---
title: uSync.CommandLine Release 🎈
date: 2022-10-19 12:00:00
tags:
- umbraco
- uSync
---

Over the last few months we have been running a beta of our [uSync.Platform](../uSync-Platform-Beta) release and we've received some great feedback. 

Based on feedback and working on the products, we have decided to split out and release the uSync command line tools as their own [Open Source Package](https://github.com/Jumoo/uSync.CommandLine) 

So today we are super happy to announce the release of the uSync command line tools.

## uSync.Cli

The uSync.Cli is the dotnet command line tool that will open up the gateway to remote control of your umbraco site from the command line (or from inside your deployment scripts!).

![uSyncCli](/images/2022/cli.png)

You can install the CLI via the dotnet tool command,

<pre class="nuget">dotnet tool install --global uSync.Cli</pre>

and then all you need is the uSync.Commands on your site. 

## uSync.Commands

the uSync.Commands package is the workhorse of the uSync command line tools its the thing that does the work on server. 

On your Umbraco site you can add this package. 

<pre class="nuget">dotnet install package uSync.Commands</pre>

For the simplest setup you need to do a little config to make it work .

```json
 "uSync": {
    "Commands": {
      "Enabled": "basic",
    }
  }
```

then you will be able to connect to your site from the command line 

```
uSync list -s https://your-server.com/umbraco -user username -pass password
```

and this should list all the commands on the site. 

[for more info see our uSync.CommandLine repo](https://github.com/Jumoo/uSync.CommandLine). 


## Included Commands 

Out of the box - you get super useful uSync commands as well as Umbraco commands to help you keep your site going. 

### Core uSync Commands :
- uSync-Import
- uSync-Export
- uSync-Report

### Umbraco Commands 
- Rebuild-DbCache
- Rebuild-Index 
- Reload-Memcache
- Ping

## uSync.Complete comming soon
One thing the uSync.Cli tool allows us to do is wrap much more complex processes into the command line - which means we can start to look at the command line tools for uSync.Complete and uSync.Publisher (which has a lot of complex multiple stage logic in it).

If you [head over to the repo](https://github.com/Jumoo/uSync.CommandLine/tree/master/uSync.Complete.Commands) you will see we have already started this work, but it requires some updates to uSync.Complete - hopefully when our next major uSync.Complete release is ready we will be able to release uSync.Complete command line tools - meaning you will be able to push and pull content and settings between sites - from the command line! 

## Write your own ?

Extending the uSync command line commands is quite easy (we hope) - if you head over to the uSync.CommandLine repo, you can hopefully [see from how we have implemented the core commands](https://github.com/Jumoo/uSync.CommandLine/tree/master/uSync.Commands.Server/Commands) that the ISyncCommand interface allows you to add your own to the list. 


## What about uSyncTriggers?
The uSync.Cli .netCore successor to the uSyncTriggers command line tool, so if you have used uSyncTriggers for Umbraco 8 you hopefully should have a fairly pain free transition to the uSync.Cli the main difference is the uSync.Cli is built to be more flexible and handle multplie request commands (where a command requires multiple round trips).

## No usync required?
*If for some 'mad' reason you don't actually use uSync you can still use the uSync command line. the `uSync.Commands.Server` package contains only umbraco specific commands (such as rebuild the DB cache) and doesn't actually require the uSync package to run.*
---
title: uSync Snapshots - Beta 1
date: 2019-08-08 11:45:47
tags:
 - Umbraco
 - uSync
---

*Delivering on our [uSync Roadmap](../usync-roadmap) we have pushed the first beta releases out for a number of the uSync Expansion Pack packages.*

*These first releases give us an opportunity to show you our progress and get some feedback on the things we are doing.*

# uSync.Snapshots 
Take point-in-time snapshots of your umbraco installation, get delta changes between points, and export some or all of your changes to import on another Umbraco Installation.

![uSync Snapshots](/images/usync/snapshots/snapshots.png)

uSync.Snapshots gives you the power to take a single "what is my Umbraco install like now" snapshot - which will look at all the other snapshots you have installed on your site merge them and tell you what is different. 

using snapshots is allows you to have a different approach to the development of your site, you can take a snapshot, do some work take another snapshot and get all the things you have changed in one handy download. 

All Snapshots can be applied together (recommended) or you can pick and choose snapshots to apply, its really unto you how you use them.

## Track changes overtime 
Some people like snapshots for no other reason then it lets them see whats changed on a live server. 

So if for example someone has to quickly go onto a live box fix a thing and get the site working again (lets not pretend you haven't done that!) - you can use snapshots before and after to quickly workout what's gone on. you can even export from the live site to put the changes back onto your development environment! 

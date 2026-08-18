---
title: uSync Roadmap - Oct 2020
date: 2020-10-09 12:20:00
tags:
    - umbraco
    - uSync
---

We've just release [uSync.Complete v8.8](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/8.8.0) 🎉. It comes with the cool new remote browser feature, that lets you browse and pull media and content from remote servers. You should [checkout the release notes]((https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/8.8.0)

## Latest releases 
Over the last few months we released a number of uSync related updates:
- [uSync 8.7.1 - Release notes](https://github.com/KevinJump/uSync8/releases/tag/8.7.1)
- [uSync.Complete v8.8 - Release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/8.8.0)
- We also worked with the vendr team on their [vendr-usync](https://vendr.net/add-ons/vendr-usync/) add-on

But we still have loads of plans, and we wanted to share what we are looking at for the next few versions of uSync and uSync.Complete.

# uSync 
Our plans for uSync include : 

## uSync Speed improvements
*(planned release v8.7.2)*

Over the last few of uSync releases we've added a lot of features and checks to content and media syncing. You can control all sorts of aspects of the sync now, such as limit the cultures and segments you want to sync and schedule publication from within in the sync files.

We've noticed that all this cool stuff this has a little impact on syncing speed 😞 and we want to get back to super fast. 

We've already started a performance review of this code for the next patch release (uSync 8.7.2) and we think we've got at approx a 30% increase in speed for content, and significant improvements in media syncing too. 

Over the next few weeks we are going to continue to work on this review, and the next release of uSync should be faster for for everyone.

## uSync History view
*(planned release v8.7.2)*

We've had this in the works for a while and we think it is working well. 

![uSync site history](/images/2020/site-history.gif)

History view lets you see what happened during all syncs, you can dive into the detail of any sync and work out what happened when.


# uSync.Complete
uSync.Complete features in the 'pipeline':

## uSync.Complete start from blank
*(planned release v8.9)*

With uSync.Complete 8.8 we've made it easier to get settings, content and media onto a newly built site - but we think this could be even easier. So we are working on making getting all the things you need on a new blank site a simple 'one-click' process. 

## uSync.Complete big media
*(planned release v8.9)*

If you have lots of media then syncing can take a while, and if you are running your site on something like azure that can timeout *(azure has a timeout of 4 minutes, and we can't rely on webjobs because it becomes deployment specific)*

We've had a solution for this with [Translation Manager](https://jumoo.co.uk/translate/) for a while now, it involves chunking up the request in javascript and then requesting the process in blocks, so each one doesn't go over the alloted time. 

This is something we are looking at brining to uSync.Complete it will enable you to sync massive amounts of media/files between sites without worring about server timeouts. 

## uSync.Complete Speed 
*(planned release v8.10)*

Alongside performance improvements for uSync we've been looking to improve the speed of uSync complete. **Its not that uSync.Complete is slow - but we know it could be faster.**

There are quite a few things we do during a push/pull that can be done before hand. We've played about a bit with this, and it looks like its going to be.... <h1 class="text-center">REALLY FAST!</h1>

.
However it's complicated. It will take a little more time for us to do it, test it, and make sure it works with everything like now - so this will be a slightly later v8.10 release.

# Timescales
These are the timescales for the upcoming releases of uSync/uSync.Complete.

- **uSync 8.7.2** : End Oct 2020 
    - Content / Media Speed improvements
    - History view 
- **uSync.Complete 8.9** : Nov 2020.
    - Start from blank
    - Large media syncing
- **uSync.Complete 8.10** : This year!
    - Faster, Faster, Faster
   
# More 
We are always open for fixes, suggestions and enhancements via github: 

- uSync8 Issues  : https://github.com/KevinJump/uSync8/issues
- uSync.Complete Issues  :https://github.com/Jumoo/uSync.Complete.Issues/issues

# Future plans 🔮   
We have a couple of things that we haven't scheduled in, but are things we've even messed about with or got some demos of. these don't have a timescale, but we are hoping they will come soon.

## uSync.Complete remote setup
We've had an internal demo package for a while that lets you setup, control and deploy Umbraco sites to azure ! - Our long term plan is to build some of this into uSync.Complete so you can click 'create site' or something similar, answer some questions and get a site on azure. 

## uSync Forms 
Support for Umbraco forms in uSync is something we started a while back - but with plans to release an update to umbraco forms that uses the database, we are holding off this update and then we will work on the package so you can sync your forms too.

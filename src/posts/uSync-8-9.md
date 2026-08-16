---
title: uSync.Complete 8.9
date: 2021-02-01 14:15:16
tags:
 - umbraco
 - uSync
---

uSync.Complete 8.9 is out - and we are quite excited !

Since the last release we've done quite a bit of rewiring to get some funky new features and better support for *'Small', 'Big', 'Large', and 'Massive'* sites content and media libraries. 

You can get it now via Nuget :

<pre class="nuget">
PM> install-package uSync.Complete
</pre>

and you can read below about all the new things. 

_(spoiler! This post is a lot like the release candidate post, except its not a release candidate anymore)_

# 🌟 What's new in uSync.Complete 8.9 

## 📦 Batch📦ing 📦request
For uSync.Complete 8.9 we have rewritten a lot of the publishing pipeline to accommodate batching of commands. 

Its not the most sexy bit of the update, and on the face of it there isn't much to see, but this update means we can now batch up any part of the request process. 

The result is that we don't have any long running tasks in the process anymore. The uSync.publisher can sync everything you throw at it and it won't hit any server timeouts!. 

This removes any limits on how many content or media (or datatypes) can be processed in a single request. meaning super big libraries of content can now be synced without timeout worries. 

So even when running on Azure Webapps with its [unmovable 230 second timeout](https://techcommunity.microsoft.com/t5/apps-on-azure/app-service-timeout-in-230-sec/m-p/1526934) you site will sync regardless of size. 

![Its hard to show batching, but you can see the waterfall in your browser](/images/2020/batch-request.png)

## ⚡ Caching
This release also includes the results of the first round of work we've been doing to speed up publish and sync requests.

### Dependency caching speeds up all syncing processed
Whenever you push or pull items between servers uSync works out what dependencies each item has (e.g doctypes, datatypes, etc) - and while this doesn't take to long, it can add up when you do hundreds of items. 

The dependency cache does this dependency calculation whenever you save (or publish an item in umbraco) and stores them in the dependency cache.

When you then push or pull - the cache is used, and because it doesn't go near the database it's **super** fast.

The cache is kept in sync for you, so you should never have to rebuild it, but if you do we have a nice interface that will do that.

![Rebuilding the uSync cache](/images/2020/cacherebuild.gif)

With caching turned on the dependency cache which could take many seconds on a large site is now measured in milliseconds. 

*We are also working on Export/report cache to make those bits even faster, they will likely land in v8.10*

## 🧬 Real-time compare<sup>&trade;</sup>
We've added a new feature to the remote content and media browsers! The browser now performs a checks with the server for differences while listing items.

This means you now have a realtime view of differences between your sites. So can see quickly what needs syncing.

![Realtime compare supports both content and media](/images/2020/realtimecompare.gif)

The full push/pull process still does this too, but if you need a quick view of a folder to know if it's up to date then this is the feature for you.

### Side-By-Side view

And we've included a side by side view - which means you can see how the page looks locally and on your target website:

![Side by Side view - so you can see what the pages look like](/images/2020/side-by-side-view.gif)

## 📚 Dictionary Sync menu
You've always been able to sync dictionary items with uSync.Complete as part of the wider settings push / pull. this update adds a push and pull option to the dictionary menu, so you can directly control dictionary items in the place they live. 

## 🌟 Better onboarding - Start from blank detection.
Cloning down an Umbraco site with uSync.Publisher already configured is now a nicer thing. 

the uSync.Publisher dashboard will detect if you are on any empty site, and give you a nice simple interface to pull the content down from a server when you start up.

![Populating a blank site](/images/2020/blankpull.gif)

And thanks to the batch publishing, you can pull the whole site in one go no matter how big.

## Exporter Sync-pack Validation
We've added a validation step when importing sync-packs via the exporter interface. [see docs](https://docs.jumoo.co.uk/uSync/uSync.Complete/exporter/#validating-sync-pack) - this allows you to run custom code pre-report and import to validate the sync pack. you could also use this to add/remove things from a sync pack, giving you greater control.

# 📣 Breaking changes
The update of the publisher pipeline to support batching, means we have changed the process used by the javascript client and remote server end points to the point where they are not backwards compatible. That means two things:
### 1. All servers in a pipeline will need to be running 8.9 for it to work. 
We've updated the internal api version if this doesn't match uSync.Publisher will tell you that the server is incompatible and not copy. 

### 2. The Static publisher isn't supported (for now)
The current uSync Static publisher will not work with uSync 8.9 because we changed quite a bit of how the publisher works. At the moment we are evaluating the merit of updating the static publisher, with new packages like [xStatic](https://our.umbraco.com/packages/backoffice-extensions/xstatic/) we are not sure there is a need for the more complex static publish that goes on in uSync.Complete - but [we are willing to have our minds changed](https://github.com/Jumoo/uSync.Complete.Issues/issues/84). 

### 2. Custom publishers will not work without some significant updates
We tried not to do this, but maintaining the legacy publisher and new 'batch' aware publisher interface was going to mean a lot of redundant and complex legacy code. 

If you have a custom publisher, we are keen to hear from you - we will happily work with you to update your publisher and get it working with the new publisher api. The new API is also simpler so hopefully it will help you to.

_**n.b** - These breaking changes only affect uSync.Publisher, while we have also changed the usync.exporter process to support batching the usync-pack format has not changed so old and new packs will work on all versions._

---
*Small', 'Big', 'Large', and 'Massive' are subjective terms: a Massive site for one person may be small for someone else, in testing this release we have scalded up our test sites of 50,000+ pages and 5,000+ images, with file sizes up to 100mb. A umbraco site of this size or above would need some specialist setup to perform well, but we are happy that uSync.Complete will work along side sites of that size*
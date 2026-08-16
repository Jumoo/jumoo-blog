---
title: Translation Manager 2.0
tags:
    - umbraco
    - translations
date: 2018-08-21 14:12:48
---

Last week we released [Translation manager](https://jumoo.co.uk/translate/) 2.0, the latest update to our translation tool for the Umbraco CMS.

Over the last 6 months we have been working with a number of translation companies on integrating and improving the translation experience for Umbraco, and this release contains all the benefits of that work. 

You can pop over to our site and read the [release notes](https://jumoo.co.uk/translate/releases/2.0.1/) to get a flavour of what's new - but we thought it would be good to go into more depth about the new features in this release. 

## Namespace change
First thing's first: The reason we have moved to version 2 of translation manager is because we have changed the underling namespace within the product.

We have had to do this for commercial reasons _(translation companies don't like other translation companies names appearing in settings and the like)_ but don't worry a licence for v1 will still work on v2. 

If you have any custom code talking to translation manager it will now need to reference the `Jumoo.Translation` Manager namespace from v2 onwards.

## Size and Speed Improvements
We have been working with a number of companies with really big* multilingual websites, and while in general Translation Manager worked fine at this scale, there are a couple of things we have done to make it work even better.

These improvements focus around azure timeouts _(you can't increase the timeout on an azure web app)_ and increasing lookup performance on lots of nodes - the results are around 15-25% speed improvements in a number of areas, and new techniques for sending lots of things off at once.

*_by big we mean massive - 25,000+ nodes into 50+ languages (~ 1million pages)_

## UI Improvements 
We have tidied up the UI, put some extra options in for job management and made it all a little bit slicker. This makes Translation Manager feel even more like part of Umbraco.

![improved item view](/images/2018/itemview.png)

## Audit View
Audit view - lets you see the status of translated items, so editors can quickly see if the current node has been translated and if there are any updates in progress.

![Audit view of a translated page](/images/2018/auditview.png)

## Link Updating
For v2. We have including the Link updater package as part of the core installation.

The link updater package works alongside the main translation process to update any links within content to point to the correct place on the translated site. 

We think this is a powerful feature that makes it even easier to work with content across Umbraco sites and can save you lots of time when moving content about, because relative links **just work** when translations are processed

## Passthrough Provider 
It turns out that Translation Manager's tools for managing translated content also work really well for managing multiple sites with very similar content on them. 

So we have developed the passthrough provider which simply takes content from one site and passes it through to another. by doing this you get all the features of Translation Manager; like creation of content on both sides, link updating - without the actual translation of the text. useful for some.

## Download
you can download the latest version of Translation Manager via nuget or our.umbraco.org - details are on our [downloads](https://jumoo.co.uk/translate/download/) page

### V1.x Life Cycle
All new functionality will be released as part of the v2.0 branch but we are committed to supporting and patching the v1.4.x branch of Translation Manager for the next 12 months. (Aug 2019)

### More soon
Over the next few weeks, we will be going into the detail of some of the newest features and providing an insight into the things we learned while scaling translation management on large sites.
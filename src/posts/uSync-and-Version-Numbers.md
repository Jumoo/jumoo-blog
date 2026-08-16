---
title: uSync and Version Numbers
date: 2020-10-09 11:30:00
tags: 
    - umbraco 
    - uSync
---

Today we release [uSync.Complete 8.8.0](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/8.8.0) - Which is a major/minor update with a few nifty features like remote content and media browsing that to help people control syncing even more. 

Since the release of uSync 8 we have tracked Umbraco release numbers so if we released something that had extra support for Umbraco 8.4 we called it uSync 8.4 even if it wasn't a breaking change inside uSync. 

However this got a little confusing for people and awkward for us to manage, so with uSync 8.8.x and onwards we have decided to stop tracking the Umbraco release numbers with uSync.

## Confusing 

It is confusing because **all versions of uSync work with all versions of Umbraco 8.x** so you can run uSync v8.8 on Umbraco v8.1 if you want. 

People understandibly get confused by this, because it looks like 8.8 was build for Umbraco 8.8 - when in reality it just has feature support for 8.8 while still working for everything. 

## Awkward

Its awkward for us. We developed a few new cool features for uSync 8.7 that where not tied to the Umbraco release which where a bit more than a patch. 

because our current version was v8.6.1 and umbraco was still at v8.6 at the time, we felt we couldn't really increment our version number beyond what Umbraco was at, because that too became really confusing for everyone (including us)

## uSync Versions
From now on we will follow our own version increments independent of Umbraco. We will be doing it in a similar way to umbraco Patches and non-breaking changes will go into a patch version (.eg v8.8.1 ) - while more significant changes that cause formats to alter or change our API in anyway will merrit a minor version upgrade (e.g 8.9).

What we will do is continue both forward version and backwards compatilibty support. At the moment our latest release uSync v8.8 works on all Umbraco 8.x versions and we plan to continue that. 



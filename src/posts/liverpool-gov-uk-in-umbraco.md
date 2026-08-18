---
title: liverpool.gov.uk in umbraco
tags:
  - liverpool.gov.uk
  - LocalGov
  - Umbraco
date: 2011-09-22 11:10:04
---

A while back I said the CMS wasn't that important when building a site and indeed [we could have built liverpool.gov.uk in wordpress](http://kevin.thejumps.co.uk/2011/we-could-have-built-it-in-wordpress/ "Complex CMS? We could have built liverpool.gov.uk in wordpress") if we wanted too.

partly to prove that point and actually because we wanted to get the teams [umbraco](http://umbraco.com/) skills built up, we've started to build [liverpool.gov.uk](http://liverpool.gov.uk) in umbraco. We might never migrate the site from its current platform from umbraco, but we felt the best way to give umbraco a proper run out was to give it the job of a full scale local government website.

[caption id="attachment_111" align="alignright" width="400" caption="Bits of liverpool.gov.uk in umbraco already"]![](/images/2011/09/Settings-Umbraco-CMS-liverpoolgovuk.png "umbraco settings") 

At the moment we are about 75% in, and it's looking good, with very little work we've gotten the homepage, content, news and contacts in

We haven't yet plumbed any of our custom user controls into the site, but it's something that shouldn't be to troublesome; the current site is also a .net site* and most of the functionality on it is CMS agnostic.

Things like our bin lookups don't care what CMS they are on, in-fact they care very little about the site; when building sites, we build user controls that output valid HTML(5) and then let the surrounding pages do the positioning and styles.

When liverpool.gov.uk (umbraco edition) is a little more feature rich we are planning on releasing it under some form of GPL licence, so others will be able to take it and mix it up for their needs.

_ *i know you are curious, the live liverpool.gov.uk is currently built in [Tridion WCMS](http://www.sdl.com/en/wcm/products/)_

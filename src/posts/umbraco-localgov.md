---
title: Umbraco.LocalGov
tags:
  - Content
  - LocalGov
  - Umbraco
  - web
date: 2011-10-15 18:38:01
---

I've been playing with Umbraco for a while now, and it's a very complete and intuitive content management system, it has all the main features,

Internally in LDL we've built a number of smallish sites recently in Umbraco, and it's served us well. The simplicity coupled with the .net base has made it something we have been able to develop and deploy rapidly. It's becoming a real firm favourite among our developers and designers and our content team think it's quite good too, but what we've yet to do is give it a proper run out.

 [![](/images/2011/10/Umbraco-LocalGov-Umbraco-LocalGov-300x195.png "Umbraco #LocalGov - Umbraco #LocalGov")](/images/2011/10/Umbraco-LocalGov-Umbraco-LocalGov.png) The recent redevelopment of Liverpool.gov.uk came a bit too soon and way too fast for us to actually consider the content management system, but as I've said before.[ We probably could have built it in any content management system](http://kevin.thejumps.co.uk/2011/we-could-have-built-it-in-wordpress/ "Complex CMS? We could have built liverpool.gov.uk in wordpress"). That wasn't the important thing -What we did with the content and structure was.

Now that is quite a bold claim, and with our growing love for Umbraco we decided to test if we could build the site in another CMS and if Umbraco would actually hold up for a large corporate scale website development (no reason why it shouldn't it already does for many people)

So a few weeks back [we started to build Liverpool.gov.uk in Umbraco](http://kevin.thejumps.co.uk/2011/liverpool-gov-uk-in-umbraco/ "liverpool.gov.uk in umbraco"), and very quickly got to a point where we had a 70-80% functionally complete system – all that was missing was the content, and the links to some of the back end systems.

It was great fun seeing the site build so quickly – but we soon realised that just porting Liverpool.gov.uk was probably not the best way forward in terms of how we build sites. Not only does each content management system do things in subtly different ways but Liverpool.gov.uk is a website that was built agilely over 6 months there are things in it, which really we would take out if starting again.

### Umbraco Starter Kit

So we decided to start again, and build a much more generic Umbraco installation, and that's where Umbraco.LocalGov was born.

[caption id="attachment_173" align="alignleft" width="300" caption="You can get Umbraco.LocalGov from our.umbraco.org"][![](/images/2011/10/Umbraco.LocalGov-our.umbraco.org_-300x199.png "Umbraco.LocalGov - our.umbraco.org")](http://our.umbraco.org/projects/starter-kits/umbracolocalgov) What we've decided to do is build, from the ground up a working Umbraco package that can be form the basis of a fully functional website like Liverpool.gov.uk but without the baggage of another CMS and an ever developing project.

Umbraco.LocalGov is the result of that work, and I think it's interesting enough to share with others, so I've launched it on the unsuspecting world as an open source Umbraco starter kit, with the hope that others will look at it, get inspired and contribute back and help us build a comprehensive open source local government website kit, that might just make some people's lives a bit easier.

If this sounds interesting to you the thing to do now is [head over to the project on the Umbraco community site](http://our.umbraco.org/projects/starter-kits/umbracolocalgov) and grab yourself the kit. I will blog about the features and finer points of the kit soon, but for now the key points are:

*   Umbraco package, will install onto umbraco 4.7.1 site
*   Based on top task methodology with landing pages and site segmentation
*   Lets you build mega menus with no code
*   Basic contact and venue functionality
*   Still has lots to come
This version is probably best described as a beta, it's not quite there for a fully functional site, but its more than enough for people to play about with and look at the concepts behind Umbraco and a local government site like Liverpool.gov.uk.

[[Umbraco.LocalGov on our.umbraco.org](http://our.umbraco.org/projects/starter-kits/umbracolocalgov)]

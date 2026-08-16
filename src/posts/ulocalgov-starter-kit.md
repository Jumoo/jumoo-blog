---
title: uLocalGov Starter Kit
tags:
  - LocalGov
  - umbraco
date: 2013-08-23 10:04:51
---

A while back, ok about 2 years ago I developed the [local government starter kit for Umbraco](http://our.umbraco.org/projects/starter-kits/ulocalgovmvc-starter-kit). A starter kit is just a different type of package that builds a whole website rather than just adding a specific feature.

[![homepage](/images/2013/08/homepage_thumb.png "homepage")](/images/2013/08/homepage.png)[When I developed the first starter kit](/2011/umbraco-localgov-intro/) it was as much as a learning exercise for myself, getting to understand Umbraco, how packages worked and how building a whole local government site in it might work.

Now two years later with lots more experience and a shiny new version of Umbraco to play with I thought it would be good to do the starter kit again, and take advantage of things we learnt delivering [liverpool.gov.uk](http://liverpool.gov.uk) and the new stuff you can do in Umbraco 6, So over the last month [Marc Goodson](https://twitter.com/marcemarc) and myself have been working on a shiny new version of the starter kit



### An almost but not completely unlike local government site

[![landingpage](/images/2013/08/landingpage_thumb.png "landingpage")](/images/2013/08/landingpage.png)The aim of the starter kit it to give you an idea of what a local government website might look like if you where to implement it in Umbraco.

Now while this starter kit is a complete from-the-ground-up build of a local government site, given that both Marc and myself worked on the Liverpool site, it’s not shocking to see that the final outcome isn’t a million miles away from that in style and structure.

There are a lot of elements to the starter kit that go into making the site, and the best place to read about them is inside the kit itself, we have included a starter kit section that has all the documentation about the various bits and how they work, but it does include

*   Homepage templates
*   Landing pages
*   Content Pages
*   Contact Pages
*   Venue Pages (with nice Google maps)
*   Service Alerts  (for when bits of the council stop working)
*   Dropdown mega menus
*   an A-Z (because people still want them)
*   Sitemaps
The site the starter kit builds is actually a bit more complicated than the site that is Liverpool today, because during the latest development [we dropped a lot of the navigational elements](/2013/liverpool-gov-uk-navigationp3/). They are in the starter kit however because without them it’s probably a bit to simple to give you a good idea of how things work.

### Always learning

[![ServiceAlert](/images/2013/08/ServiceAlert_thumb.png "ServiceAlert")](/images/2013/08/ServiceAlert.png)Like the first time I build the starter kit I wanted to use the time as an opportunity to try new things and learn a bit more; so as well as developing the solution in [mvc](http://www.asp.net/mvc) as opposed to more traditional .net [web forms](http://www.asp.net/web-forms), I also did lost of co-development with Marc Goodson via [GitHub](http://github.com/). this has been really interesting not least because I’ve had the opportunity to use [uSync](http://our.umbraco.org/projects/developer-tools/usync) and [uSync.ContentEdition](http://our.umbraco.org/projects/developer-tools/usynccontentedition) in anger, something I will probably talk about soon.

### Open for contributions

As well as working with all the new shiny bits of Umbraco and GitHub one thing both marc and myself are very keen on with this version of the starter kit is that it is completely open for other people to contribute.

We are very aware that we are coming at this from one distinct direction, and we feel that there can only be benefit from people from other backgrounds contribute and add to the diversity of the package, [you can browse and download all the source on GitHub](https://github.com/KevinJump/uLocalGov.StarterKit), so why not get forking?
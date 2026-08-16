---
title: Complex CMS? We could have built liverpool.gov.uk in wordpress
tags:
  - Content
  - liverpool.gov.uk
  - LocalGov
  - web
date: 2011-06-11 20:21:36
---

There is an interesting debate over at CMS Wire; brewing in the [comments on a post about replacing your CMS is the question of needing a CMS](http://www.cmswire.com/cms/web-cms/replacing-your-web-cms-may-be-exactly-the-wrong-thing-to-do-011564.php#disqus_thread), and I suspect it's partly our fault.

When we give our presentation about how we built Liverpool.gov.uk, one of the questions we suggest people ask is do you need a CMS?

Now it's not because we expect the answer to be no, it's because we think it's better to start from the position of not and work out what you do need then starting from 'we need a fully featured enterprise CMS' and fudging what you can do out of it.

Before we even started re-building Liverpool.gov.uk – we looked at how the site was managed and decided fairly early on to [centralize almost all of the content](http://kevin.thejumps.co.uk/2011/centralizing-what-matters/ "Centralizing what matters"), this gave us a very simple management model for the site. We did it all centrally.

This greatly simplifies the CMS needs of the site; we go from needing advanced permissions, workflow, approval, moderation and reporting to really just needing a nice editor to write content in.

We saved a lot of time and money just removing the massive training needs of 260 editors, not to mention the simplification in the code that went into the CMS.

Practically because we built the site in 6 months we used our existing (and quite expensive to procure) CMS platform to deliver the site, because it was there and the infrastructure was proven, but in reality we could have met our requirements with Wordpress or something small like CMSMadeSimple.

Personally I think the CMS market is filled with near identical products all offering roughly the same overly long list of features you would never use. The only practical difference between them is the platform they run on top of; and this should be a factor choosing something that doesn't fit with your organisations infrastructure or skills will cause you nothing but grief.

Now for different organisations, things will be different, but when looking for a CMS the questions shouldn't be how many features have we got, it should be how few do we need.
---
title: Google Mobile Friendly
tags:
  - small bite
  - web
date: 2015-03-24 12:11:18
---

Now, you know you should never trust anyone who starts by telling you that you need to optimize your site for Google Panda, or some such animal; they are just trying to sell you SEO snake oil.

But: [From April, Google will start to rank sites based on mobile friendliness](http://googlewebmastercentral.blogspot.co.uk/2015/02/finding-more-mobile-friendly-search.html) and there is [a test you can do to check if Google thinks your site is mobile friendly](https://www.google.com/webmasters/tools/mobile-friendly/).

We've been looking at this, because it seems like a good thing to add to [PageSpeedy](http://jumoo.uk/speedy/). Unfortunately, whilst it _looks _quite a lot like Google PageSpeed Insights, the mobile test is subtly different. There is no API for it, for a start, so at the moment we can't include it.

In a quick scout of local gov sites, though, we have noticed one thing which is going to hinder sites when it comes to being marked as mobile friendly, even if the site is responsive and works well: more often than not, it will be because the robots.txt file is stopping Google from seeing styles.

Unlike Google PageSpeed,[ the mobile test obeys the robots.txt file when it fetches the site](https://developers.google.com/webmasters/mobile-sites/references/faq), just like Google does. This means that if you block stylesheets and scripts from Google, then the mobile friendly test will not see them. **This will likely mean your site will not render very well on mobile, and so it will fail the tests. ** Which means, of course, that it will not be marked as mobile friendly in Google search results.

 [![Blocking styles from Google can make it think your site isn](/images/2015/03/mobileblocked-172x300.png)](/images/2015/03/mobileblocked.png) Blocking styles from Google can make it think your site isn't very mobile friendly 

So to be mobile friendly: **Remove the blocking of stylesheets (and sometimes scripts) from your robots.txt file**. That's all. And don't worry, I don't think Google was about to return your layout.css in search results anyway.
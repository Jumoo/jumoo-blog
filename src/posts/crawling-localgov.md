---
title: Crawling LocalGov
tags:
  - Analysis
  - LocalGov
date: 2016-08-10 13:56:11
---

<span style="font-weight: 400;">We have been running </span>[<span style="font-weight: 400;">LocalGov PageSpeedy</span>](http://jumoo.uk/speedy/)<span style="font-weight: 400;"> for over two years now. We’ve run over 25,000 speed tests and discovered over 60,000 website technology features.</span>

<span style="font-weight: 400;">Over those two years PageSpeedy has helped a number of councils to improve the speed of their homepage for their users. That’s great, of course, but we’ve always wanted to go a bit deeper than just the homepage, and start to look at just how big localgov sites are and what other things they are running.</span>

## <span style="font-weight: 400;">The Page Speedy Spider </span>

<span style="font-weight: 400;">So, this month, we have taken some time out from obsessing over page render times, and built ourselves a localgov website crawler. [The SpeedySpider. ](http://blog.jumoo.co.uk/2016/pagespeedyspider/)</span>

<span style="font-weight: 400;">Our aim in crawling the UK’s localgov websites is two fold: first, we wanted to know how many documents (we’re talking about non-web-friendly formats - PDFs, Word files, spreadsheets, that sort of thing) are sitting on all those council websites; and second, we wanted to provide a better picture of what applications and services councils are using beneath the hood, when they provide services on line. </span>

## <span style="font-weight: 400;">Documents. </span>

<span style="font-weight: 400;">Our initial hunch was there would be lots of those sorts of documents across local government - and we weren’t wrong. So far, we have crawled just over of half of the sites (249/410) and we have found 754,049 of them, so </span>**we are currently projecting over 1.2 million documents on localgov websites.**

<span style="font-weight: 400;">That’s a big number, and it's worth noting that this doesn’t include all of the meeting minutes and planning documents that many councils have. Currently, the SpeedySpider is only counting documents on the main council site (so www.council.gov.uk, or council.gov.uk). It’s most common to run planning, licensing and committee applications on separate sub-sites. We are finding those, but we are not currently indexing them. </span>

## <span style="font-weight: 400;">Applications</span>

<span style="font-weight: 400;">The second aim we had when we started to spider the sites was to discover and document just which third party applications councils are using. </span>

<span style="font-weight: 400;">PageSpeedy already runs a modified version of the </span>[<span style="font-weight: 400;">wappalyzer</span>](https://wappalyzer.com/)<span style="font-weight: 400;"> feature detection script, to identify all the different technologies councils are using on their homepages, but we wanted to go deeper than that. </span>

<span style="font-weight: 400;">The first step in this process has been finding all the sub-domains under council sites (such as planning.council.gov.uk, for example). After just half of the websites spidered, we have around 2,000 subdomains in our database. </span>

<span style="font-weight: 400;">Now that we have these domains, we are starting to run an even heavier modified </span>[<span style="font-weight: 400;">wappalyzer</span>](https://wappalyzer.com/)<span style="font-weight: 400;"> configuration against each domain to discover just what each one is running. </span>

<span style="font-weight: 400;">For localgov apps, we’re not too concerned about versions of jquery, or google analytics, we are primarily looking for the application that is powering the site. </span>

<span style="font-weight: 400;">It’s early days in our detection process. We’ve found around 533 applications, but we need more, and you can help, by </span>[<span style="font-weight: 400;">submitting known apps to our github pages</span>](https://github.com/Jumoo/Jumoo.PageSpeedyPlus/issues/1)<span style="font-weight: 400;">.</span>

<span style="font-weight: 400;">We are hoping that as our detection scripts get more and more complete, we can start to build a consistent and self maintaining record of just what is going on across localgov. </span>

&nbsp;
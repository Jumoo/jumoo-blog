---
title: PageSpeedySpider
tags:
  - Analysis
  - LocalGov
date: 2016-08-10 13:55:20
---

<span style="font-weight: 400;">As part of our </span>[<span style="font-weight: 400;">LocalGov PageSpeedy</span>](http://jumoo.uk/speedy/sites.php)<span style="font-weight: 400;"> Site we have recently introduced page and document counts, alongside our application directory. We are hoping to build up a comprehensive list of council applications and who uses them. </span>

<span style="font-weight: 400;">In order to provide this information we have built a custom </span>[<span style="font-weight: 400;">web crawler</span>](https://en.wikipedia.org/wiki/Web_crawler)<span style="font-weight: 400;">, the PageSpeedySpider to crawl and index these numbers from localgov websites across the country.</span>

![SpeedySpiderLogo](/images/2016/08/spiderlogo.png)

## <span style="font-weight: 400;">Spidering </span>

<span style="font-weight: 400;">The spider works like any other web crawler: starting at the site’s homepage, it finds all the links to other pages, documents and domains on the page, and then uses them to continue the crawl. As we are only primarily concerned with localgov sites, the spider crawler does the following: </span>

*   <span style="font-weight: 400;">We only follow links on the primary council site (so </span><span style="font-weight: 400;">www.council.gov.uk</span><span style="font-weight: 400;"> or council.gov.uk). External links main site are not crawled.</span>
*   <span style="font-weight: 400;">We track all document links on the primary domain, either through extension detection (for example ‘.pdf’) or media type (so when the web server tells us it’s a pdf).</span>
*   <span style="font-weight: 400;">We track all sub-domains from the main council site (example: planning.council.gov.uk). Against these domains, we store the first link we find - this link is then used when running our detection scripts to identify applications.</span>

## <span style="font-weight: 400;">Detection</span>

<span style="font-weight: 400;">Our detection scripts run against the list of sub-domains and use a modified version of </span>[<span style="font-weight: 400;">wappalyzer</span>](https://wappalyzer.com/)<span style="font-weight: 400;"> to identify applications. These scripts use a headless browser (</span>[<span style="font-weight: 400;">phantomJs</span>](http://phantomjs.org/)<span style="font-weight: 400;">) to load the page and run the wappalyzer javascript which detects features based on content, scripts and server response headers. </span>

<span style="font-weight: 400;">We are constantly improving these scripts, and welcome contributions if you know what a site is running. </span>

## <span style="font-weight: 400;">Frequency / Speedy</span>

<span style="font-weight: 400;">It is not our intention to run the speedy spider every month. Spidering is a slow and time consuming process, that often requires us to tweak configuration and script settings to run on all sites. </span>

<span style="font-weight: 400;">At the moment our spidering server* spiders approximately 14 council websites a night, with sites that fail being analyzed and placed into the queue for recrawling. Once we have crawled all the sites we will freeze the crawl data. </span>

<span style="font-weight: 400;">It is our plan to only run the full site crawls every 6 to 12 months, and against new sites, when they are detected by the main pageSpeedy scripts.   </span>

_<span style="font-weight: 400;">*  As part of making page speedy quick and easy for anyone to run SpeedySpider is currently running on our state of the art </span>_[_<span style="font-weight: 400;">Raspberry Pi 2 Model B</span>_](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/)_<span style="font-weight: 400;"> server. </span>_

## <span style="font-weight: 400;">Improving the Spider</span>

<span style="font-weight: 400;">As with everything else we do [the code that makes up the spider and the application detection features is open source and available for you to use and remix as you wish](https://github.com/Jumoo/Jumoo.PageSpeedyPlus).</span>

<span style="font-weight: 400;">We are constantly improving and tweaking the spider code. Web crawling is something of an addictive process - you set your crawlers running, come back and notice it got lost down some rabbit hole, so you tweak config and regex and set it off again. And again. And again. The diversity and complexity of websites never leaves you with a ‘simple’ crawl!</span>
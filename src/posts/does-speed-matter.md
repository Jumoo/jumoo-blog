---
title: Does Speed Matter?
tags:
  - Digital
  - LocalGov
  - Tools
date: 2014-11-03 11:53:36
---

According to an article on localgov.co.uk, [the Majority of council websites are failing a government performance standard](http://www.localgov.co.uk/Majority-of-council-websites-fail-government-standard/37527). Apparently, a report has concluded that 69% of council websites take more than 0.4 seconds to respond, and this misses the target set out in the government's Digital by Default standard.

### A Standard:

This is perplexing, on a number of levels. Perhaps the first thing to note is that there doesn't appear to _be_ a government standard relating to speed, which makes it difficult to demonstrate how it is being missed. There is many a good thing in the [Digital by Default Service Standard](https://www.gov.uk/service-manual/digital-by-default), including a recommendation for [the things you should measure](https://www.gov.uk/service-manual/measurement/other-kpis.html), but speed isn't specifically one of them and there certainly isn't a "time to respond" standard in there.

### Does speed even matter?

The reality is that, for the majority of users sitting at home on their tablet, laptop or mobile phone, the speed it takes a website to respond really doesn't matter that much. On a decent broadband the average council websites only takes around 1.5 seconds to load - what is of much more importance to people is being able to find the information they are looking for. Being able to find, understand and act are of much more critical importance to people than speed.

However, if you've ever had the misfortune to need to use the web whilst on a train, or in a remote holiday cottage on the Isle of Wight, you will know that super-fast broadband isn't really something everyone in the country has, and for some speed _is_ an issue. On a slow connection, a typical council website might take around 10 seconds to load. Since we know that the first page they load is unlikely to be the one they needed, the cumulative effect quickly becomes a major inconvenience to the users.

### What is fast?

There is very little detail in the article, and I have yet to find the detailed report, so it's not possible to say exactly how these findings were reached. We can assume from "time to respond" that the report is measuring [time to first byte](http://en.wikipedia.org/wiki/Time_To_First_Byte) - that's how long it takes a server to send something back when a browser asks for it. This is probably the most basic of the speed tests you can perform against a website, and it tells you very little about the actual speed of the site you are looking at.

The time to first byte tells you, technically, when a website started to respond, but it doesn't tell you when the user got the website. A lot of factors can go into the rendering of a website. The layout of the HTML, the images and the careless use of Javascript all have an influence on how quickly a web browser can actually "draw" the site.

### Time to Screen

If you do want to do something about the speed of your site, you should be looking at the time it takes a browser to display the page, and the factors that influence the render time. Fortunately, there are a number of tools that can help you improve the actual speed of your website.

[WebPageTest](http://www.webpagetest.org/) is the most comprehensive way to measure the speed of a website, and how long ![webpagetest](/images/2014/11/webpagetest-150x150.png)it actually takes to respond. The service allows you to submit a website, to be rendered on a number of platforms with a shaped network connection to emulate real world conditions. You can, for example, get the service to measure the speed of the website on a shaped 3G connection, showing you what it's like to load the website, where there internet maybe isn't as fast as your office.

[![pagespeed](/images/2014/11/pagespeedy-150x150.png)](https://developers.google.com/speed/pagespeed/insights/)[Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/): is a more lightweight way of looking at a page, it returns a score (and we all like scores!) and a number of recommendations on how the speed of the page could be improved. Pagespeed is a simpler way to understand the speed issue, and it has an API which is why we use it for Pagespeedy.

[YSlow](http://yslow.org/):probably on the the first proper web 'performance' tools, using a defined (and redefinable) rule set, ySlow can give you a series of recommendations to improve page speed.

### Making Superfast:

The good news about speeding up your website with these tools is that it doesn't require you to buy any fancy new server kit, and little changes can make a massive difference to the speed people get to use your site.

**Superfast: East Sussex - Broadband:   0.9sec,  3G: 4sec**

[The East Sussex website consistently scores a high Google Pagespeed score when tested](http://jumoo.uk/speedy/speedy.php?id=131), and loads quickly for a number of reasons, but primarily the lack of large imagery, compressed javascript and reduced requests means the site can load in a relatively short amount of time.

**Less Fast: Thurrock - Broadband: 1.8sec,  3G 11sec**

Thurrock was singled out in the article as being the 'fastest' council website, but [on the Pagespeedy site it is the 318th fastest council site tested](http://jumoo.uk/speedy/speedytable.php?month=10). [The Google Pagespeed results](https://developers.google.com/speed/pagespeed/insights/?url=www.thurrock.gov.uk&amp;tab=desktop) shows there are 22 blocking scripts delaying the rendering of the page to users.

Looking at the WebPageTest.org results we can see that a total of 61 requests are required to load the page, and there are a number of large images slowing down the rendering of the page - this is where tools like WebPageTest can spot the small changes that would make a big difference:

 [![Secton of Thurrock timeline from WebPageTest.org](/images/2014/11/thurrocktimeline.png)](/images/2014/11/thurrocktimeline.png) Secton of Thurrock timeline from WebPageTest.org 

Looking at the timeline for Thurrock, the major blocker on render time is actually the widget.js file, which is used to display a Twitter timeline on the homepage. The rendering of the page is blocked while this large file is downloaded, and this is something that can be easily rectified.

A quick search of the Twitter documentation finds you [how to load the widget.js file asynchronously](https://dev.twitter.com/web/javascript/loading), and so remove it from blocking the rendering of the site. Looking at the timeline above, this alone would reduce the time to screen by around 4 seconds.

This is just one quick fix, there are many little things that could be done to make the site load more quickly. None of them require a redesign of the site, and none of them require new technology to be purchased.

### Go Speedy

So there you go, speed isn't the most important thing for most of your users, but it can be a real pain, and it doesn't have to cost money to fix - you can make some quite simple changes and see big reductions in the amount of time it actually takes people to see your site. Just don't be bound by any [random reports online](http://www.localgov.co.uk/Six-out-of-ten-council-websites-fail-speed-test/29003) (Speedscore: 76) or [league tables](http://jumoo.uk/speedy/) (Speedscore 93) because most of the time they mean nothing to your users.
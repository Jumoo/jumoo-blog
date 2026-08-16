---
title: Access via a mobile may not mean mobile users
tags:
  - LocalGov
  - User Experience
date: 2013-06-25 15:42:05
---

I like looking at numbers, they help me understand things.

One number I've been looking at over the last few months is the number of mobile visits to liverpool.gov.uk, I even have a nice little graph.

 [![Mobile usage overtime](/images/2013/06/MobileTrendsJune13.png)](/images/2013/06/MobileTrendsJune13.png) Mobile usage overtime 

It shows you that access on mobiles has been growing fast and still going. For the main site it's at 38.9% and for the lifestyles (fitness centres) section of the site it's now 58.4%.

So rapidly growing portions of the traffic is now via mobile devices, but does this doesn't mean nearly 40% of visits to the site are coming from people on the move?

Well no – there are a number of reasons and digging deeper into the stats helps you see them.

### Tablets

Firstly – the mobile number included tablets, now I know a lot of people don't think they are any different that desktops (they are, but that's for another discussion), so for those people we shall remove them.
<div class="well">_You can now segment tablet only visits in Google analytics – if you select advanced segments, there is now a tablet only segment – so you can select this to get the volume of tablet visits.
_</div>
For this site that is around 12%-13%

### Roaming vs Fixed

The next thing we can do is work out what type of network the mobile access was from.
<div class="well">_With advanced segments on for mobile traffic turned on, the technology -&gt; network report will detail the service providers traffic came from.
_</div>
This isn't a precise science because you have a list of providers and you have to make intelligent guesses about them – for simplicity I go through the list looking for fixed broadband providers.

If you get the totals for the fixed providers you will get a rough indication of the amount of mobile traffic coming from wireless access which is more than likely people in their house*

Doing this for the above and I get around 50% of traffic on mobile devices is coming from fixed broadband connections. So given that I will have missed some (and people can access via a mobile provider inside their house) it's fairly safe to assume that at least ½ of the mobile traffic to the site isn't from people in the street.

### Mobile behaviour

This makes a significant difference when looking at how to target your mobile site. It is very tempting to put loads of geo-location features in, like how do I get to the library from here? And to focus the whole mobile site on location based features, but if ½ of your visitors are in their homes will this add value or will it distract from their basic needs?

The answer is again to look at the evidence, look at the behaviours of mobile users on your site, is there any significant differences in the way the site is used? Can you tailor for those uses?

Early on we did mockups of the site completely tailors for what we thought would be a good mobile site, lots of find this, report that – and it looked cool – but then we looked at the numbers – and the reality is the behaviour on mobile devices is almost identical to that of people accessing it on computers. We built the site to work well on mobile, and it offers the same core functionality on all platforms – because at the moment that's how people use it.

&nbsp;

_*yes, they could be in someone else's house, or a coffee shop, or the pub, but given that you have only classified the providers you are sure of, the ones you have missed of your total probably out way those people. _
---
title: Beta localgov sites June 2014
tags:
  - Analysis
  - LocalGov
date: 2014-06-03 11:06:45
---

Having looked at all the [all the new localgov site launches since April](http://blog.jumoo.co.uk/2014/new-localgov-websites-since-april/ "New #LocalGov Websites since April") - [Phil Rumens said he was looking for a way to find beta/test sites](https://plus.google.com/116744274965992983647/posts/jYi2fMxMtt2). Now the [localgov speedy script](https://github.com/KevinJump/LocalGovSpeedy/blob/master/LocalGovSpeedy.py) takes a list of existing sites, and tests them, but it's not a huge leap to change the code search the sites we are looking at for signs of "beta", or "new website", so I created a new script [looksy.py](https://github.com/KevinJump/LocalGovSpeedy/blob/master/looksy.py) that did that.

It turns out that's not a very good way of finding a new site - after a few tweaks I found [beta darlington.gov.uk](http://beta.darlington.gov.uk) so you could say that is the only public beta at the moment.

Undeterred I've create a new script [guessy.py](https://github.com/KevinJump/LocalGovSpeedy/blob/master/guessy.py) that just sees if there is anything at the end of a domain name. _(i.e. takes darlington.gov.uk and looks for beta.darlington.gov.uk or new.darlington.gov.uk)._ and that works much better - I now have 14 local government beta or new sites. Now just because these sites say beta / new doesn't mean they are/aren't launched in some form _(hence all these links are rel=nofollow)_

## Beta Sites:

### Birmingham [http://beta.birmingham.gov.uk](http://beta.birmingham.gov.uk)

<div class="center">![birmingham_desktop](/images/2014/06/birmingham_desktop.jpg)![birmingham_mobile](/images/2014/06/birmingham_mobile.jpg)</div>

### Cheshire east [http://beta.cheshireeast.gov.uk](http://beta.cheshireeast.gov.uk)

<div class="center">![cheshire east_desktop](/images/2014/06/cheshire-east_desktop.jpg)![cheshire east_mobile](/images/2014/06/cheshire-east_mobile.jpg)</div>

### Darlington [http://beta.darlington.gov.uk](http://beta.darlington.gov.uk)

<div class="center">![darlington_desktop](/images/2014/06/darlington_desktop.jpg)![darlington_mobile](/images/2014/06/darlington_mobile.jpg)</div>

### Devon [http://beta.devon.gov.uk](http://beta.devon.gov.uk)

<div class="center">![devon_desktop](/images/2014/06/devon_desktop.jpg)![devon_mobile](/images/2014/06/devon_mobile.jpg)</div>

### Gwynedd [http://beta.gwynedd.gov.uk](http://beta.gwynedd.gov.uk)

<div class="center">![gwynedd_desktop](/images/2014/06/gwynedd_desktop.jpg)![gwynedd_mobile](/images/2014/06/gwynedd_mobile.jpg)</div>

### Hounslow [http://beta.hounslow.gov.uk](http://beta.hounslow.gov.uk)

<div class="center">![honslow_desktop](/images/2014/06/honslow_desktop.jpg)![honslow_mobile](/images/2014/06/honslow_mobile.jpg)</div>

### Wandsworth [http://beta.wandsworth.gov.uk](http://beta.wandsworth.gov.uk)

<div class="center">![wandsworth_desktop](/images/2014/06/wandsworth_desktop.jpg)![wandsworth_mobile](/images/2014/06/wandsworth_mobile.jpg)</div>

### South Gloucestershire [http://beta.southglos.gov.uk](http://beta.southglos.gov.uk)

<div class="center">![southglos_desktop](/images/2014/06/southglos_desktop.jpg)![southglos_mobile](/images/2014/06/southglos_mobile.jpg)</div>

### Barnsley [http://new.barnsley.gov.uk](http://new.barnsley.gov.uk)

<div class="center">![barnsley_desktop](/images/2014/06/barnsley_desktop.jpg)![barnsley_mobile](/images/2014/06/barnsley_mobile.jpg)</div>

### Brighton Hove [http://new.brighton-hove.gov.uk](http://new.brighton-hove.gov.uk)

<div class="center">![brighton-hove_desktop](/images/2014/06/brighton-hove_desktop.jpg)![brighton-hove_mobile](/images/2014/06/brighton-hove_mobile.jpg)</div>

### East Devon [http://new.eastdevon.gov.uk](http://new.eastdevon.gov.uk)

<div class="center">![eastdevon_desktop](/images/2014/06/eastdevon_desktop.jpg)![eastdevon_mobile](/images/2014/06/eastdevon_mobile.jpg)</div>

### Lancashire [http://new.lancashire.gov.uk](http://new.lancashire.gov.uk)

<div class="center">![lancashire_desktop](/images/2014/06/lancashire_desktop.jpg)![lancashire_mobile](/images/2014/06/lancashire_mobile.jpg)</div>

### Shropshire [http://new.shropshire.gov.uk](http://new.shropshire.gov.uk)

<div class="center">![shropshire_desktop](/images/2014/06/shropshire_desktop.jpg)![shropshire_mobile](/images/2014/06/shropshire_mobile.jpg)</div>

### Telford [http://new.telford.gov.uk](http://new.telford.gov.uk)

<div class="center">![telform_desktop](/images/2014/06/telform_desktop.jpg)![telform_mobile](/images/2014/06/telform_mobile.jpg)</div>
Many of these sites are in various states of development, some look like default installations of the CMS (Wandsworth) while I know others actually do provide live services (for example in Shropshire and Lancashire)

_if your website is on this list and you want it taking off - [drop me an email](http://blog.jumoo.co.uk/contact-us/ "Contact Us") and i will remove it (but you probably want better security on something you don't want people to see) _

**Open source everything**: At Jumoo, we open source everything, so even though the python script is a bit of an abomination, you can [go to github and see for yourself what we have done to find these ](https://github.com/KevinJump/LocalGovSpeedy)<span style="text-decoration: underline;">sites</span>.
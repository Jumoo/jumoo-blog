---
title: Local Elections 2016 - Find my polling station
tags:
  - Analysis
  - LocalGov
  - User Experience
  - web
date: 2016-05-05 12:14:57
---

[In my previous post](http://blog.jumoo.co.uk/2016/local-elections-2016-signposting-users/), I talked about the importance of highlighting key information on days like today (election day), but as I said in that post, making it easy to find the key pages is one thing - presenting the information is a whole different game.

## Election Day Voting

On Election day the number one task (by quite a way) on almost all local council websites will be, “Where is my polling station?” It’s a perfectly reasonable question. While the council does put this information on each and every polling card, you don’t need the card to vote; you might have lost it, or you might be on the way to or from work when you want to know where to go.

## Where do I vote?

On the face of it, finding my polling station is very much like many other "find my nearest" type inquiries that councils provide (not always well). Except it is a little more complex than that.

For all elections you are assigned a particular polling station - you can’t just turn up to any polling station and vote. In most cases, this will probably be the nearest one, but for quite a few people, it might not be. If you live on the edge of the ward or constituency it might be that the polling station in the next ward is closer to your house but not yours, or it might be that the one for your block in the ward is at the other end of the area, and so further away.

Sadly, many councils are failing their users, either by providing too little information, or by putting it all in one confusing pile and hoping the voters will sort it out.

### Exhibit A: The Polling Place PDF

A lot of councils provide a list of polling places/stations, in PDF format. This document quite blatantly comes out of some electoral system and whilst it was probably very useful to the people who created it, it solves very few if any of the voter's problems.

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 601.70px; height: 341.33px;">[![](/images/2016/05/t_Local-Elections-2016-polling-.jpg)](/images/2016/05/Local-Elections-2016-polling-.jpg "Local Elections 2016 - polling .jpg")</span>

In order for this list to be useful, I need to know my voter district - which I will only get from my polling card - which already has my polling station on it.

### Exhibit B: The Cross Referencing job

A slightly more useful but equally confusing response is to also post a PDF with the street-to-codes lookup on it.

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 601.70px; height: 122.67px;">[![](/images/2016/05/t_Local-Elections-2016-polling-1-1.jpg)](/images/2016/05/Local-Elections-2016-polling-1-1.jpg "Local Elections 2016 - polling .jpg")</span>

So, here we do have the information, but you need to go and find it all out. _The added step of looking things up is also compounded in this situation in that the street names appeared to be missing from that pdf._

### Exhibit C: The Map

Maps a quick 'go-to' for many councils when it comes to geospatial information. You put the information into the system and it handles all the displaying and stuff. But there are many, many cases where the information can be better presented as text or a list, and polling stations is one of them.

The first problem is the one of assumed proximity, as we mentioned above. The nearest polling station might not be yours.

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 374.00px; height: 294.00px;">![](/images/2016/05/Local-Elections-2016-polling-1-2.jpg)</span>

Just putting these dots on the map doesn’t help anyone on Fairlop Road or Waterloo Road.

The second issue is mobile and maps. Many councils have mapping solutions and so once the polling station info is in you can look at it on a map, but these portals are not designed around what your user wants. They are usually built from the point of view of someone who manages geospatial data.

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 413.00px; height: 731.00px;">![](/images/2016/05/Local-Elections-2016-polling-1-3.jpg)</span>
Even if the information on that map is of use to us, it's quite the thing on a mobile phone.

## Find <span style="color: #ff0000;">My</span> Polling station.

For elections, it is, in a real sense, **your** polling station, the one you as an elector have been assigned to, that you want to know the location of. This means that in the background, the council needs to know what polling station is assigned to each elector. Quite often, a council might have this information in GIS shapefiles, or at the very least a list of houses to polling stations. <span style="font-size: 14pt; line-height: 1.4em;">Don't let the council claim that they don’t have this information internally - they must. After all, they managed to print the polling cards.</span>

If you have the right information in a usable format, then this is a simple transaction:

1.  Get my Postcode/street
2.  Get my house number (if needed)
3.  Here is the polling station
Fortunately there are some councils that do this well. I would note [Liverpool](http://liverpool.gov.uk/council/voting-and-elections/polling-stations-2016/), [Bristol](https://www.bristol.gov.uk/voting-elections/polling-stations), and [Exeter](http://apps.exeter.gov.uk/dn2pollingstation/stationfinder.aspx)'s approach to this as being clean and simple. You get the information you want with very little effort.

[gallery size="medium" ids="1828,1829,1830"]

### Information leakage

One thing that can be of a concern is the leaking of information on the register. Putting too much information on your website can risk revealing personal elector information, which would make the council fall foul of a few laws, and won’t go down well with anyone.

No, you are not going to put people’s names on your website! How can this be a problem?

Well, if you have a list of elector addresses to polling stations, you will have gaps where no-one is registered to vote. If your site handles these gaps differently than the registered addresses, you will be leaking information about who is or isn't registered to vote. It's a small leak, but it's highly personal, and so significant.

The thing to do here is to return the information as if the address is registered (return the info for first address in the street or something), as long as you have some form of disclaimer about the information you return _not_ indicating your right to vote, then you are providing the requested information without leaking and details.

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 601.70px; height: 126.67px;">[![](/images/2016/05/t_Local-Elections-2016-polling-1-2.jpg)](/images/2016/05/Local-Elections-2016-polling-1-4.jpg "Local Elections 2016 - polling .jpg")</span>

&nbsp;
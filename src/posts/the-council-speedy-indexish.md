---
title: The council speedy indexish
tags:
  - Digital
  - LocalGov
  - Tools
  - web
date: 2014-03-03 08:44:44
---

Really, it started as me messing about with a Python script, the Google APIs and a list of council websites. After a little bit of trial and error and quite a bit of tweaking, I have the **council speedy indexish** thingy; and it says that East Sussex have the 'fastest' council website in the county.

The script uses the [Google Pagespeed API,](https://developers.google.com/speed/pagespeed/) to get information on every council website, the scores and page sizes are then stored in a central table and who doesn't like a league table?



## Top 10 'fastest' council websites <small>1st March 2014</small>

<table class="table table-hover">
<thead>
<tr>
<th>#</th>
<th>Council</th>
<th>Site</th>
<th>Score</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>East Sussex</td>
<td>http://www.eastsussex.gov.uk</td>
<td>92</td>
</tr>
<tr>
<td>2</td>
<td>Southwark</td>
<td>http://www.southwark.gov.uk</td>
<td>90</td>
</tr>
<tr>
<td>3</td>
<td>North West Leicestershire</td>
<td>http://www.nwleicsdc.gov.uk</td>
<td>89</td>
</tr>
<tr>
<td>4</td>
<td>Braintree</td>
<td>http://www.braintree.gov.uk</td>
<td>89</td>
</tr>
<tr>
<td>5</td>
<td>Northampton</td>
<td>http://www.northampton.gov.uk</td>
<td>89</td>
</tr>
<tr>
<td>6</td>
<td>Shropshire</td>
<td>http://www.shropshire.gov.uk</td>
<td>88</td>
</tr>
<tr>
<td>7</td>
<td>Southend</td>
<td>http://www.southend.gov.uk</td>
<td>88</td>
</tr>
<tr>
<td>8</td>
<td>Selby</td>
<td>http://www.selby.gov.uk</td>
<td>87</td>
</tr>
<tr>
<td>9</td>
<td>West Dunbartonshire</td>
<td>http://www.west-dunbarton.gov.uk</td>
<td>87</td>
</tr>
<tr>
<td>10</td>
<td>Pendle</td>
<td>http://www.pendle.gov.uk</td>
<td>87</td>
</tr>
</tbody>
</table>

_* where the score is equal, the sites are ranked by total bytes size_

### What this means

The reality is these results don't tell you that any one website is faster than another. Google PageSpeed actually measures how much potential improvement there is for a website.

PageSpeed uses a series of measure focusing on how long a page takes to appear to the user, that includes server response times, download size and how long the page takes to render. These give you a good indicator of how 'fast' as website appears when someone requests it, and more importantly the [Insight tool](http://developers.google.com/speed/pagespeed/insights/) tells you what is slowing down that user experience.

Speed of course isn't the only (or even main) concern people have with a website. In reality the speed a website loads is a [hygiene factor](http://en.wikipedia.org/wiki/Two-factor_theory), you only really notice it if it's slow, but also it doesn't actually take that long to fix some basic things to make your site load quicker, and Google's PageSpeed tools are an easy place to start.

<span style="font-family: 'Bree Serif', Georgia, serif; font-size: 1.5em; font-weight: 600; line-height: 1.6;">Google PageSpeed Tools</span>

The Google PageSpeed tools are a family of tools designed to help you optimise your website, at the root of the tools is the [PageSpeed insight tool](http://developers.google.com/speed/pagespeed/insights/) which will analyse your site and give you a series of recommendations on how to improve page speed. This is more than looking at server response time and file size.  It looks at things like file compression, styles and scripts that might block the page from actually being rendered. with a few simple tweaks you can improve a sites page speed score, and hence make it appear a lot quicker for users.

### All the data

When we run the script it produces a nice big spreadsheet, if you want to see the data then that's the place to look.

[All the data - speedy check march 2014](https://docs.google.com/spreadsheets/d/1b45jWaUu4o1lJAlnfEBy3y6yshhRoX35X7zP2Xp1jDI/edit?usp=sharing)

**<small>_Notes about the results:_</small>**

<small>**Welsh sites**: If you run against the root of all sites, then a lot of the Welsh sites score really high, but that is because most of them have a splash page asking the user to choose the English or Welsh version of the site, for fairness, I have tested Welsh sites against the English homepage not the splash page.</small>

<small>**Open source everything**: At Jumoo, we open source everything, so even though the python script is a bit of an abomination, you can [go to github and see for yourself what we have done to reach these results](https://github.com/KevinJump/LocalGovSpeedy).</small>
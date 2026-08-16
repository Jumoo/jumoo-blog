---
title: The April 2014 council speedy indexish
tags:
  - Digital
  - LocalGov
  - Tools
  - web
date: 2014-04-02 10:34:08
---

Last month we knocked out some [quick and dirty code to go through all council websites and get their Google page speed insight scores](http://kevin.jumoo.co.uk/2014/the-council-speedy-indexish/ "The council speedy indexish"). So it being a new month we've run the code again.

### Top 10 'fastest' council websites <small>1st April 2014</small>

<table class="table table-hover">
<tbody>
<tr>
<th>#</th>
<th>Council</th>
<th>Site</th>
<th>Score</th>
<th>Change</th>
</tr>
<tr>
<td>1</td>
<td>eastsussex</td>
<td>http://www.eastsussex.gov.uk</td>
<td>92</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>slough</td>
<td>http://www.slough.gov.uk</td>
<td>91</td>
<td>+9</td>
</tr>
<tr>
<td>3</td>
<td>braintree</td>
<td>http://www.braintree.gov.uk</td>
<td>89</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>shropshire</td>
<td>http://www.shropshire.gov.uk</td>
<td>88</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>nwleicsdc</td>
<td>http://www.nwleicsdc.gov.uk</td>
<td>88</td>
<td>-1</td>
</tr>
<tr>
<td>6</td>
<td>southlanarkshire</td>
<td>http://www.southlanarkshire.gov.uk</td>
<td>87</td>
<td>+29</td>
</tr>
<tr>
<td>7</td>
<td>selby</td>
<td>http://www.selby.gov.uk</td>
<td>86</td>
<td>-1</td>
</tr>
<tr>
<td>8</td>
<td>warwickdc</td>
<td>http://www.warwickdc.gov.uk</td>
<td>86</td>
<td>+21</td>
</tr>
<tr>
<td>9</td>
<td>west-dunbarton</td>
<td>http://www.west-dunbarton.gov.uk</td>
<td>86</td>
<td>-1</td>
</tr>
<tr>
<td>10</td>
<td>pendle</td>
<td>http://www.pendle.gov.uk</td>
<td>86</td>
<td>-1</td>
</tr>
</tbody>
</table>

### What does it mean?

Well, [as with last month](http://kevin.jumoo.co.uk/2014/the-council-speedy-indexish/ "The council speedy indexish"), not much - but it's interesting to see the changes. Many of the sites moving up and down are doing so because of nothing more than different images on the pages.

There were a few sites where the change in images in news stories has more than doubled the size of the homepage in the last month. While this might not make a significant difference to many, if your broadband or mobile internet connection isn't great, its going to change the amount of time it takes to view the site quite significantly.

### All the data

When we run the script, it produces a nice big spreadsheet. If you want to see the data, then that's the place to look.

[All the data - speedy check April 2014](https://docs.google.com/spreadsheets/d/1SClD4ZkHjxpnu9qhEW8vzmLmY2FIvrwhWDs39yHogG0/edit?usp=sharing)

**<small>_Notes about the results:_</small>**

<small>**Welsh sites**: If you run against the root of all sites, then a lot of the Welsh sites score really high, but that is because most of them have a splash page asking the user to choose the English or Welsh version of the site. For fairness, I have tested Welsh sites against the English homepage not the splash page.</small>

<small>**Open source everything**: At Jumoo, we open source everything, so even though the python script is a bit of an abomination, you can [go to github and see for yourself what we have done to reach these results](https://github.com/KevinJump/LocalGovSpeedy).</small>
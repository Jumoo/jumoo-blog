---
title: Pagespeedy May 2014
tags:
  - Digital
  - LocalGov
  - Tools
  - web
date: 2014-05-01 11:54:39
---

Another month, another version of the [council pagespeedy index ](http://kevin.jumoo.co.uk/2014/the-council-speedy-indexish/ "The council speedy indexish")thing. Where we run a scruffy python script against [Google's page speed api](https://developers.google.com/speed/docs/insights/about) and get a load of scores.

### Top 10 'fastest' council websites <small>1st May 2014</small>

<table class="table table-hover">
<tbody>
<tr>
<th>#</th>
<th>Council</th>
<th>Site</th>
<th>Desktop</th>
<th>Mobile</th>
</tr>
<tr>
<td>1</td>
<td>eastsussex</td>
<td>http://www.eastsussex.gov.uk</td>
<td>93</td>
<td>89</td>
</tr>
<tr>
<td>2</td>
<td>slough</td>
<td>http://www.slough.gov.uk</td>
<td>90</td>
<td>77</td>
</tr>
<tr>
<td>3</td>
<td>kingston</td>
<td>http://www.kingston.gov.uk</td>
<td>90</td>
<td>67</td>
</tr>
<tr>
<td>4</td>
<td>Braintree</td>
<td>http://www.braintree.gov.uk</td>
<td>89</td>
<td>80</td>
</tr>
<tr>
<td>5</td>
<td>Harrow</td>
<td>http://www.harrow.gov.uk</td>
<td>89</td>
<td>74</td>
</tr>
<tr>
<td>6</td>
<td>nwleicsdc</td>
<td>http://www.nwleicsdc.gov.uk</td>
<td>88</td>
<td>78</td>
</tr>
<tr>
<td>7</td>
<td>Selby</td>
<td>http://www.selby.gov.uk</td>
<td>86</td>
<td>75</td>
</tr>
<tr>
<td>8</td>
<td>West-Dunbarton</td>
<td>http://www.west-dunbarton.gov.uk</td>
<td>86</td>
<td>73</td>
</tr>
<tr>
<td>9</td>
<td>Brighton Hove</td>
<td>http://www.brighton-hove.gov.uk</td>
<td>86</td>
<td>72</td>
</tr>
<tr>
<td>10</td>
<td>Pendle</td>
<td>http://www.pendle.gov.uk</td>
<td>86</td>
<td>72</td>
</tr>
</tbody>
</table>

[all the data - full results may 2014](https://docs.google.com/spreadsheets/d/1na-hk47a6f3Cn-WXBjNM1WGz-4rvn9Kq9pqWzSw32VQ/edit?usp=sharing)

Again you can read into this what you will, but the speed index is an attempt to rate how quick your site appears to users, that isn't the same as how big it is. [Paul Irish](http://www.paulirish.com/) of Google recently gave a really informative talk about performance

[youtube https://www.youtube.com/watch?v=R8W_6xWphtw]

The item on mobile browsers and packets is interesting if a bit technical, but it really shows you how important it is to get the content to the users as quickly as possible.

**<small>_Notes about the results:_</small>**

<small>**Welsh sites**: If you run against the root of all sites, then a lot of the Welsh sites score really high, but that is because most of them have a splash page asking the user to choose the English or Welsh version of the site. For fairness, I have tested Welsh sites against the English homepage not the splash page.</small>

<small>**Open source everything**: At Jumoo, we open source everything, so even though the python script is a bit of an abomination, you can [go to github and see for yourself what we have done to reach these results](https://github.com/KevinJump/LocalGovSpeedy).</small>
---
title: The speedy trendyness score
tags:
  - Analysis
  - code
  - User Experience
date: 2015-03-02 11:01:49
---

As [Pagespeedy](http://jumoo.uk/speedy/index.html) trundles on; [this months results show](http://localhost/speedyplus/speedytable.php?month=14) that sites are getting a little bit faster, and[ South Ayrshire have gone obsessive over speed](http://jumoo.uk/speedy/speedy.php?id=335) : ) - Alongside the speed testing and [new site detection](http://jumoo.uk/speedy/newsites.php?month=14), we always like to play about with other things.

Once such thing we have been sneaking into PageSpeedy over the last few months is word and link frequency. As we grab the html of a site's homepage, we are counting the links looking for the most used words on the homepage and just for fun giving each council a "trendyness" score.

### Trendyness

We search each website for common 'trendy' words in local government, for each one we find we award a trendy point. As of March 2015 trendy list is:

'top task', 'straight to', 'residents', 'pay it', 'report it', 'find my nearest', 'popular tasks','highlights','faq','frequently asked','Popular topics','Quick links','Do it online', 'press releases'

Now as you can see this isn't really a list of trendy words, so much as a list of words that offer very little value to the user of a site: 'Quick Links', [see gerry McGovern](http://www.gerrymcgovern.com/new-thinking/how-create-clear-web-navigation-menus); 'Top Tasks' - while the methodology might be sound, just listing things as 'top tasks' doesn't help anyone; There is [some debate about "pay it" and "report it"](http://www.comms2point0.co.uk/comms2point0/2015/3/2/how-effective-is-your-home-page.html) _(although I am struggling to find any solid evidence for or against)._ But it's not just a list of negative words, alongside those above we have included some phases that give an indication of how a site might be structured, 'Residents' for example often indicates that the site has been segmented in someway.

Across the 433 websites PageSpeedy analyses - The average trendiness is 2.5, and while not all the words are negative, and it's difficult to avoid their use sometimes. I would say a score of 5 or or more would raise alarms for me, in terms of what value all those extra phases bring to the site.
<table class="table">
<thead>
<tr>
<th style="text-align: left;">Phrase</th>
<th style="text-align: left;">Sites</th>
<th style="text-align: left;">Percentage</th>
</tr>
</thead>
<tbody>
<tr>
<td>residents</td>
<td>227</td>
<td>52%</td>
</tr>
<tr>
<td>report it</td>
<td>195</td>
<td>45%</td>
</tr>
<tr>
<td>faq</td>
<td>124</td>
<td>29%</td>
</tr>
<tr>
<td>Do it online</td>
<td>116</td>
<td>27%</td>
</tr>
<tr>
<td>pay it</td>
<td>87</td>
<td>20%</td>
</tr>
<tr>
<td>frequently asked</td>
<td>76</td>
<td>18%</td>
</tr>
<tr>
<td>top task</td>
<td>78</td>
<td>18%</td>
</tr>
<tr>
<td>press releases</td>
<td>64</td>
<td>15%</td>
</tr>
<tr>
<td>Quick links</td>
<td>59</td>
<td>14%</td>
</tr>
<tr>
<td>find my nearest</td>
<td>57</td>
<td>13%</td>
</tr>
<tr>
<td>straight to</td>
<td>41</td>
<td>9%</td>
</tr>
<tr>
<td>highlights</td>
<td>25</td>
<td>6%</td>
</tr>
<tr>
<td>popular tasks</td>
<td>21</td>
<td>5%</td>
</tr>
<tr>
<td>Popular topics</td>
<td>11</td>
<td>3%</td>
</tr>
</tbody>
</table>
_Everything we create at jumoo is open source, the [scripts we used to get data are on github ](https://github.com/KevinJump/Jumoo.PageSpeedyPlus)if you want to hack together something your self._
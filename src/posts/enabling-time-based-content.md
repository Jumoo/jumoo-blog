---
title: Enabling time based content
tags:
  - LocalGov
  - small bite
  - Umbraco
  - User Experience
date: 2014-06-04 22:12:13
---

Little changes to how you collect and store information can make a big difference to how you can present it and use it on your site. A nice example of how we do this is opening times.

Traditionally on council websites opening times are often just a html table painstakingly created by the content editor, Its time consuming, open to mistakes and it doesn't give much flexibility.

For the recent re-design of [West Dunbartonshire council's website](http://www.west-dunbarton.gov.uk/), We added the [Opening Hours package](http://our.umbraco.org/projects/backoffice-extensions/openinghours) for Umbraco to give the content editors a much improved way of entering times and the site a much more flexible way of presenting the information.

### Easy data entry

For the editor the opening times package presents a nice clear interface where they can enter the details of when a venue is open

[![openingtime_editor](/images/2014/03/openingtime_editor.png)](/images/2014/03/openingtime_editor.png)

The interface reduces the cognitive load on the editors as they no longer have to worry about formatting and presentation, and importantly the data is stored in a structured way that allows us to manipulate the information on the site .

### Controlled rendering

[![openingtimes](/images/2014/03/openingtimes-300x153.png)](/images/2014/03/openingtimes.png)

Using the resulting structured data we can render the opening times in a clear, consistent and accessible way. The opening times table even highlights the current day making it easier for the users of the site to get information quickly.

### Open and closed

Using the opening time data we are also able to add another feature to the library pages of the site, the current status of the library.

When a user loads the page, the site reads the opening time information and displays a nice simple banner telling the user is the library is open, when it opens and how long it is until it's closed.

When the library is closed, it tells the user how long it is until it opens:

[![librarystatus_opening](/images/2014/03/librarystatus_opening1.png)](/images/2014/03/librarystatus_opening1.png)

<span style="font-size: 16pt; line-height: 1.6;">Once the library is open, the banner changes to tell you how long it is until it closes: </span>

[![librarystatus_open](/images/2014/03/librarystatus_open1.png)](/images/2014/03/librarystatus_open1.png)

When it's closer to closing time, the banner changes again

[![bindate_part_all_same](/images/2014/03/bindate_part_all_same.png)](/images/2014/03/bindate_part_all_same.png)

At the end of the day (or on days when it doesn't open) the banner tells the users that the library is closed for the rest of the day.

[![librarystatus_closed](/images/2014/03/librarystatus_closed1.png)](/images/2014/03/librarystatus_closed1.png)

It's a very small and simple change - but the ability to change the site based on structured data is both powerful and really useful for the users of the site. At the moment the information is only used to change the status of the library but it  but it opens up the potential of more levels of customization based on time and all from a simple change in how the data is entered and stored within the content management system.

*   _[Opening Hours package](http://our.umbraco.org/projects/backoffice-extensions/openinghours) is available for Umbraco and works on v4/6_
*   _We have recently developed the [Opening Soon package](http://our.umbraco.org/projects/backoffice-extensions/openingsoon) for the LocalGovStarter Kit works for Umbraco 7_
&nbsp;

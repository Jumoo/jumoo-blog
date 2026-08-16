---
title: uSync v14 Beta
date: 2024-03-06 16:00:00
tags:
 - uSync
 - umbraco
---

[The Umbraco v14 beta is out!](https://our.umbraco.com/download/releases/1400) (6th March 2024), and as we try to be keep uSync as in sync as we can, we are releasing a beta version to go along with it. 

# Umbraco v14
Umbraco v14 is a complete rewrite of the Umbraco backoffice 'client', So AngularJs is gone, and in its place we have WebComponents, and new Management APIs. While these changes will make very little diffrence to how your webiste looks and behaves it does change quite a lot for package developers. 

The Umbraco v14 beta is very much aimed at package developers, and the [new Documentation](https://docs.umbraco.com/umbraco-cms/v/14.latest-beta/) is definitely the place to start looking.


# uSync v14.
uSync v14 mostly works like previous versions of uSync, in fact the core of the code doing all the work is the same as v13. You get all the existing features, such as roots and background processing, but with a shiny v14 look.

![uSync v14 dashboard](/images/2024/usync-14.png)


## One Does Not Simply Copy From v13 (yet).
One of our long term aims with uSync is for our files to be as close to 100% backward compatible as possible (you can take uSync v8 files and use them on v13), but there are some small changes in Umbraco v14 that means at the moment, copying v13 uSync files to a Umbraco v14 site won't work. 

In the long term we are looking to make this work, and you can see the start of that if you run uSync v14 with an old usync folder now.

![uSync beta legacy warning box](/images/2024/usync-14-legacy.png)

But this means for the beta, while you could get some mileage from "simply" copying the v13 files, you might see that some of the datatype configuration settings don't make it across. Don't worry, we'll be on top of this in the final relase. 

## What Isn't Beta
We are working on all our extra packages, such as [uSync.Complete](https://jumoo.co.uk/uSync/complete/), [uSync.FormsEdition](https://jumoo.co.uk/uSync/forms/), and uSync.Umbraco.Commerce. As the betas and release candidates progress, we will release those packages alongside the uSync beta. For now, you just have the core uSync package should you need it. 

## Gettting uSync Beta.

The uSync v14 beta can be installed just like any other nuget package (that bit hasn't changed).

<pre class="nuget">
dotnet add package uSync --version 14.0.0-beta01
</pre>

Enjoy!
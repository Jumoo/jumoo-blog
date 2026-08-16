---
title: uSync Complete 8.11
date: 2021-09-01 17:18:59
tags:
- umbraco
- uSync
---

Today we are happy to announce two new releases: uSync 8.10 and uSync.Complete 8.11 🎉 

These releases add some neat new functionality to uSync and uSync.Complete and form the basis of what we hope will become the long term support releases of the uSync family on Umbraco v8.

## Can't wait ⌚ Dive in and get them now
You can install the packages via Nuget: 

### uSync.Complete
<pre class="nuget">PM> install-package uSync.Complete -version 8.11.0</pre>

### uSync
<pre class="nuget">PM> install-package uSync -version 8.10.0</pre>

You can also install the Umbraco packages from the backoffice or the our.umbraco.com pages for uSync and uSync.Complete.

# What's new 🌟✨

## Push and pull everything ! 
New menu items on almost all the back end settings, mean you can now push and pull almost anything from within Umbraco, from all the document types right down to an individual datatype. 

![Push some doctypes](/images/2021/push-doc-type.gif)

uSync.Complete will still do its work in the background to work out all the dependencies - so if you push a document type uSync.Complete will make sure all the required data types are setup on the target site too. 

## Stability fixes 
As with all releases there are a few small fixes you can get more details in the release notes :

- [uSync 8.10 release notes](https://github.com/KevinJump/uSync/releases/tag/v8.10.0)
- [uSync.Complete 8.11 release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v8.11.0)

## Coming *very* soon ! push 3rd party things
The main driver behind this work was actually to enable other developers to integrate uSync.Complete menus into their own adds ons and packages. This also means we can extend how and where uSync.Complete can push and pull content in many places, along side the push/pull everywhere menus we have also being working on our third party package support.

## uSync.Forms 
Our [uSync.Forms package](https://jumoo.co.uk/usync/forms/) has been in beta for a while now, and with some tiding up we are nearly ready with the final release, and what better thing to add then the ability to Push and pull forms directly from the Umbraco Forms section.

![Coming soon! Push and pull Umbraco forms](/images/2021/push-forms.png)

## Vendr.uSync
We worked were happy to work closely with Outfield digital on the [vendr.usync package](https://vendr.net/add-ons/vendr-usync/) so once again we are pleased to be adding push and pull support to the package, and soon you will be able to push and pull all of your store settings between Umbraco sites right from the menus inside vendr. 

![Coming soon! Push and pull vendr stores](/images/2021/push-vendr.png)

# Long Term Support releases
It is our intention that uSync 8.10 and uSync.Complete 8.11 will become the long term support releases of uSync on Umbraco v8.x. 

That is to say we don't intend to release anything major on the v8 platform of uSync. From this point on our development efforts will begin to focus more and more on uSync v9 for Umbraco 9 and beyond.

What this really means is these will be the versions we will start to set as current for Umbraco v8. Support responses will likely start with *"have you upgraded to uSync v8.10.x or uSync.Complete v8.11.x."* 

We will still be releasing point releases, to address fixes and umbraco support (for instance uSync 8.10.1 will support tabs in Umbraco 8.17) but there will likely be no more major minor uSync releases for v8.

If for some reason we do add anything new to uSync for Umbraco v8. That release will only contain the new features with v8.10/11 still getting the fixes etc applied to it. 

**🚨 Remember uSync 8.10/uSync.Complete 8.11 will work on all versions of Umbraco 8.x - so you don't have to upgrade umbraco to use the latest version of uSync (although we recommend Umbraco 8.7 or above)**
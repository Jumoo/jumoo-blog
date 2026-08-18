---
title: uSync 9 release candidate
date: 2021-07-08 10:42:18
tags:
 - uSync
 - Umbraco
---

The Umbraco 9 Release candidate is out 🎉 you can read all about it on the [official Umbraco blog]().

and today we are excited to announce that we are too releasing a release candidate of uSync 9 for Umbraco 9 and a beta of uSync.Complete for Umbraco 9. 

that means all the wonderfulness of uSync and uSync.Complete can now be felt on Umbraco 9 and the .NetCore platform.

## uSync 9 - Release candidate 

We are really happy with uSync 9 on Umbraco 9 - we've previously released 4 betas, and multiple nightly builds and we think uSync 9 is fairly solid.

<pre class="nuget">
PM> install-package uSync -version 9.0.0-rc001
</pre>

or if you embracing the new NetCore tooling 😇

<pre class="nuget">
PM> dotnet add package uSync --version 9.0.0-rc001
</pre>


We've also made sure we've kept backwards compatibility so uSync 8 files work with uSync 9. **This means you can use uSync to move your settings and content between Umbraco 8 and Umbraco 9 sites.**

### Nothing has changed<sup>*</sup>
**well almost nothing*

for the uSync 9 release we wanted to change as little as possible from the award winning 😉 uSync 8 - so we have ported over all the features and settings as close to how v8 works as possible. 

There are a few changes - especially around settings [See our docs](https://docs.jumoo.co.uk/uSync/v9/settings/), and we've slightly updated the dashboard, to make it easier to sync either settings or content or everything.

![new Simpler uSync 9 dashboard](/images/2021/usync9rc-dashboard.png)

### Content Edition is now part of the Core uSync package
For uSync 9 we have brought uSync.ContentEdition into the main uSync package, no longer do you need to install uSync and uSync.ContentEdition to get content and media syncing its now built in, if you don't want to sync content you can quickly turn of content edition if you don't want to use it via the app settings.

## Try it out

So you can install uSync 9 now on your Umbraco Release candidate builds.

<pre class="nuget">
dotnet add package uSync --version 9.0.0-rc001
</pre>

Leave us feedback on the [uSync github repo](https://github.com/KevinJump/uSync8/issues).

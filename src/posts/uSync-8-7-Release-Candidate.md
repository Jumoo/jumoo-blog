---
title: uSync 8.7 Release Candidate
date: 2020-08-26 10:00:00
tags: 
 - umbraco
 - uSync 
---

**[Umbraco 8.7 release candidate is out](https://umbraco.com/blog/umbraco-87-release-candidate-is-now-available/), and you can now start to test all the wonderful new features such as the block editor, and segmentation (if you can work out how!). But wouldn't it be more fun if you could sync and deploy your test umbraco websites across the internet? We though so - so we've pushed the button on uSync and uSync.Complete 8.7 release candidates.**

This is your chance to play with all the new features of Umbraco 8.7 and uSync 8.7 together. To help you understand just what that means we've put together a quick list of all the new things in uSync 8.7.


# 🎉 What's new in uSync 8.7 ?
uSync 8.7 has a whole load of updated plumming, which is fully detailed [on our repo](https://github.com/KevinJump/uSync8/issues?q=is%3Aissue+label%3Arelease%2F8.7.0+is%3Aclosed) - key items include:

## Support for all the block editors 
We now have support for Umbraco 8.7's [block editor](https://github.com/umbraco/Umbraco-CMS/pull/8273), the [Bento editor 🍱](https://our.umbraco.com/packages/backoffice-extensions/bento-editor/), and [Perplex content blocks](https://our.umbraco.com/packages/backoffice-extensions/perplexcontentblocks/), and we are ready for more property editors based on the block editor model.

## Add custom mappers direcly into the config 📜. 
If you have your own custom property editors that store content in the same way as existing editors you can now quickly [add them via config](https://github.com/KevinJump/uSync8/issues/149), so you don't need to write any code for uSync to fully track* them. 

**Customer property editors will stream in and out of uSync without any config, but if you want uSync.complete to track dependencies you need to have some config to tell it how to look for dependencies*

## Get uSync 8.7-rc now!
You can install it now via nuget:
<pre class="nuget">
PM> install-package uSync -version 8.7.0-rc
</pre>

-----

# 🎉 What's new in uSync.Complete 8.7 ?
Building on all the cool stuff we've added to uSync 8.7 - uSync.Complete now has a raft of new features to make setup easier for you, and publishing easier for your editors.
A [full list of changes](https://github.com/Jumoo/uSync.Complete.Issues/issues?q=is%3Aissue+label%3Arelease%2F8.7.0+is%3Aclosed) is avalible on the uSync.Complete issues repository.

## Simplified Server 💻 Management 
We've given the dashboard for managing your config and servers an overhaul and now its easier than before to see what servers you have setup, how they are configured and how you can sync the settings between them.

![New streamlined Publisher dashboard](/images/2020/87_dashboard.png).

Infact we've tried to make the whole setup process easier, so now from this dashboard you can add a new server and configure the security keys, to get everything up and running without having to copy config files around.

![Setup server connections remotely](/images/2020/87_serversetup.png)

## Scheduled Publishing ⏰
We've added the ability to schedule publication while you push to another server.

![Schedule content for publication](/images/2020/87_schedule.png)

## Language Publishing
Along side scheduling you can now choose to only push certain languages to another server. 

![Choose your lanaguage](/images/2020/87_languages.png)

## Sync more things : Relations 💑 and Public Access 🔓.

Along side the new features you can see, we've added a few you can't. Including new relation and relation type serialization and public access settings. 

Meaning you can now serizlie your sites public access security settings between sites.

UI Updates now also mean that you can choose to have these config elements sync with the content (so you don't have to go to settings), meaning things like Culture and Hostname settings can also be brought across eaiser.

## 🧼 Cleaner Publishing UI.

While adding all this new funky stuff, we've had a serious focus on trying to simplfy the whole publishing experience for your editors. Most notable we've moved a lot of the configuration settings, so now most of the time your editors will see the simple 'include children' options with all the other settings hidden or optionaly put behind the 'advanced options' toggle. 

![Simpler Editor publishing dialog](/images/2020/87_simple.png)

## Deploy system files 🤯 (experimental)
Included in this release is the ability to deploy system files between servers!

![Deploy the system files!!](/images/2020/87_systemfiles.png)

This is something we have been looking at for a while with uSync.Complete, and while it works and you can in theory even upgrade Umbraco using this method. We are not sure if it's a step to far! 

So for the moment its hidden behind a config flag, and we are working out if the world is ready for such power. 

## Have a play 🎠

To install uSync.Complete 8.7-rc:
<pre class="nuget">
PM> install-package uSync.Complete -version 8.7.0-rc
</pre>

*As with the normal version of uSync.Complete you will get a free 60 day trial to try out all the features*

----

## Feedback
As always we are really keen to get feedback from everone on what works, what doesn't and what you may think is missing. 

for uSync please use the main issues board on the uSync repo:

- [uSync issues board](https://github.com/KevinJump/uSync8/issues)

for uSync complete we also have an issues repo, where you can feedback and track the work we are doing. 

- [uSync.Complete issues board](https://github.com/Jumoo/uSync.Complete.Issues/issues)


## Planned Release date 
At the moment Umbraco 8.7 is planned for release on the 3rd September 2020 📅, We are currently working to the same deadline for uSync & uSync.Complete. we are hoping to get the live within 24 hours of Umbraco's release 🤞. 

---
*uSync 8.7 will still be fully backwards compatible with all versions of Umbraco 8.x and indeed uSync 8.6 will work with Umbraco 8.7 - but to take advantage of all the latest features you should upgrade.*

🎉 Happy Syncing. 
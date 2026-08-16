---
title: Translation Manager 2.1
tags:
  - umbraco
  - translations
date: 2018-09-03 14:12:48
---


Following hot on the heels of the [new v2 release of Translation Manager](/2018/translation-manager-2-0), comes version 2.1 with some extra little features to make translations even more joyful!

### Simpler Vorto Setups
Previously with translation manager you had to exercise some caution when setting up vorto based translation sets. If you weren't careful you could accedentily include non-vorto properties in translation sets and you could end up with translations overwriting things you didn't want them to overwrite. 

With this release we have simplified the way these "Loopback" translations work. during the setup translation manager will detect if you are creating a loopback set, and tweak the setup accordingly. 

In Loopback mode, Translation Manager will only include 'multi-lingual' properties within a translation and it will do this within other properties too (for example vorto in a nested content property). 

![Multiple Property Config](/images/2018/loopback.png)

This means you no longer have to worry about what properties are or aren't capable of handling multiple language values, the translation process will manage that for you. 

### Translation Status
In v2.0 we introduced (but turned off by default) the translation history/status views - based on feedback we have improved these so now they offer you a quick glance view of the translation status of any node. 

![Translation status](/images/2018/statusview.png)

### Health Checks
Our new Translation Manager health checks (in the Umbraco Health check section) allow you to check the status of some of the internals of translation manager. 

It doesn't happen often but if you're site breaks or your connection to a translation service provider goes down while you are setting up a translation you can end up with orphaned values within the translation tables - the health checks offer you a quick and easy way to clean this up.

![health checks](/images/2018/healthchecks.png)

### Fixup Mode
Again most of the time translations 'just work' - but occasionaly it all goes wrong - Fixup mode (hidden in the diagnostic tab) turns on some of the controls that are usually off once a job or node is in progress, allowing you to change things mid translation that really you shouldn't need to change. 

*Because of the power of fixup mode it isn't recommended you have it on unless you really need it and you are totally aware of what the changes will do to your translation jobs.*

### Get Translation Manager
For more info about Translation Manager, how to get it and what it does - see our <a href="https://jumoo.co.uk/translate/">Translation Manager product pages</a> and checkout the [release notes for v2.1](https://jumoo.co.uk/translate/releases/2.1.0/).

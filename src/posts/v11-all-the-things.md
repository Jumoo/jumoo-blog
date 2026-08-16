---
title: v11 all the things
date: 2022-12-02 10:00:00
tags:
- uSync
- umbraco
- translations
---

Umbraco 11 is out, and supports .net 7, has the block grid, and is quite fast. 

so as you might expect we have updated all of our packages :

# uSync v11

All the same features as v10. but we have snuck in a new result view

![The report view makes it quicker to see at a glance what has changed. ](/images/2022/usync11-dashboard.png)


<pre class="nuget">dotnet add package uSync</pre>


# uSync.Complete v11

uSync.Complete eleven also is very similar to its v10 counterpart, except we 
have improved caching so it will be faster ! 

<pre class="nuget">dotnet add package uSync.Compelte</pre>

# Translation Manager v11

<pre class="nuget">dotnet add package Jumoo.TranslationManager</pre>

# Linked Pages v10

Linked pages package works on both Umbraco 10 and 11.

<pre class="nuget">dotnet add package Our.Umbraco.LinkedPages</pre>

# Maintanence Mode v10

Like Linked Pages package the maintaince mode package will work for both Umbraco 10
and Umbraco 11 sites.  

<pre class="nuget">dotnet add package Our.Umbraco.MaintenanceMode</pre>

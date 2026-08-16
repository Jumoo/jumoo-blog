---
title: Umbraco – Intranet Authentication
tags:
  - umbraco
date: 2011-11-20 07:58:23
---

Another little bit of Umbraco packagery. [Intranet Authentication](http://our.umbraco.org/projects/backoffice-extensions/umbraco-intranet-authentication) in Umbraco by using a custom build active directory role provider.

<span style="color: #808080;">Umbraco is a great example of  why building a .net application by using and extending the standard providers and tools within .net enables great things. All to often I see applications where the developer has decided to completely right their own way of doing something, like writing their own authentication methods, and it just makes it virtually impossible to integrate anything with the app.</span>

[caption id="attachment_219" align="alignright" width="300" caption="AD Roles using the umbraco roles dialogue."][![](/images/2011/11/Roles-Selection-300x273.png "Roles Selection")](/images/2011/11/Roles-Selection.png) 

Umbraco however, uses the standards where ever it can, exposes almost everything via the class libraries, and provides a good package management system for getting it all onto an installation – so it makes it ideal for any type of integration hackery.

### Authentication on Intranets

Umbraco is good for simple intranet content, what it lacks however is a good authenticate everyone against windows solution. Out-of-the-box Umbraco has a built in membership provider, and leaves it as an exercise for the developer as to how users get created, and authenticated. Although as it uses all the standard providers you can just drop a login control on a page and your away.

What Umbraco doesn't do is authenticate against windows, you can mess about and get this working, but then you hit the second hurdle, security.

If you change Umbraco (via IIS and web.config) to use windows, you soon get the error that the standard windows role provider will not list all the groups inside Umbraco. That's because there could be hundreds of groups, and it wouldn't be much fun waiting for that while the provider went of and got them all.

But that's all OK for a developer none of that sounds like too much to fix? Right ?

Well it's not – that's why I've done it (I'm a 100 lines of quite kind of developer nowadays) – it's tricky to configure, and lots of little gotchas along the way, but the end result is my next Umbraco package. [Intranet Authentication](http://our.umbraco.org/projects/backoffice-extensions/umbraco-intranet-authentication).

It's got to be one the trickiest things to install and get working, as you need to get IIS, the Web.Config and the backend settings in Umbraco, all right together, but when you do, no login prompts for the users and full active directory based role control of the content shall be yours.

[Umbraco Intranet Authentication](http://our.umbraco.org/projects/backoffice-extensions/umbraco-intranet-authentication) - our.umbraco.org
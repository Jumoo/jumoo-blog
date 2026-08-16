---
title: uSync Beta 🧪 releases for Umbraco 10 
date: 2022-05-17 10:00:00
tags:
 - uSync
 - umbraco
---

If you missed it [The Umbraco 10 release candidate is out](https://umbraco.com/blog/umbraco-10-release-candidate/), and with it a whole slew of updates to Umbraco including support for SQLite and .Net 6. 

Umbraco 10 is slated to be the [Long Term Support (LTS) release of Umbraco](https://umbraco.com/products/knowledge-center/long-term-support-and-end-of-life/) which means it is going to be supported until 2025. (with v9 support stopping late 2022).

For most the upgrade from Umbraco v9 will be painless or involve very few changes, and to aid that we have released compatible beta versions of uSync and uSync.Complete to go with the v10 release. 

# Get the uSync Beta releases 

Installing the uSync beta releases couldn't be simpler,both [uSync](https://www.nuget.org/packages/uSync/10.0.0-beta1) and [uSync.Complete](https://www.nuget.org/packages/uSync.Complete/10.0.0-beta1) are available via nuget, and you can add them to your projects via the command line

```
dotnet add package uSync --version 10.0.0-beta1
```

and 

```
dotnet add package uSync.Complete --version 10.0.0-beta1
```

# Using the uSync Beta releases
Functionally the beta releases of uSync/uSync.Complete work exactly the same as they do for Umbraco v9 and that are cross compatible which means **You can copy uSync folders between v9 and v10 sites and you can hook a Umbraco v9 and Umbraco v10 site together and publish between them**.

# Providing feedback.
As ever we welcome any feedback you may have using uSync or uSync.Complete and if you hit a problem or find a bug 🐜 then please pop over to either the [uSync](https://github.com/KevinJump/uSync/issues) or [uSync.Complete issues](https://github.com/Jumoo/uSync.Complete.Issues/issues), create a new issue and provide us with some details ✔️

----

## Razor Class libraries
If you look closely at these betas you will notice one difference. We are no delivering these packages as [Razor Class libraries](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/ui-class?view=aspnetcore-6.0&tabs=visual-studio) with [static assets](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/ui-class?view=aspnetcore-6.0&tabs=visual-studio#create-an-rcl-with-static-assets-1).

This means, if you look is that the uSync files are no longer in your projects `app_plugins` folder. Instead while you are developing your site, the files are served directly from the Nuget cache on your machine, and when you publish a site (e.g via `dotnet publish`) the files are copied into the `wwwroot` folder of the site. 

What this really means if you no longer have to worry about the uSync files in the `app_plugins` folder and if they are in sync or need source controlling - because they are not there anymore! 

### How the RCL works. 
Thanks to a few tweaks in v10, we can now include all resources and lang files in RCL static files. 

In practical terms what happens is Asp.Net does something clever to map files from the .nuget cache to look like they are in `/app_plugins/packagename` so the website thinks the files are there but really they are not!

If you want to see how this is configured you can take a look at the uSync repo ! but the reason we are at beta is because we are still working out the best way to package the files as part of our build process - so there is some tiding up for us to do *(its super simple if you don't want to pre-minimize js/css assets, but that is something we like to do with the uSync packages)*

**Super Hint: If you want to know more [Kevin is giving a talk at this years Codegarden](https://codegarden.umbraco.com/codegarden-program/) and it will no doubt have some Package / RCL content in it!**

---
title: uSync 9 - beta
date: 2021-04-28 20:03:51
tags:
 - Umbraco
 - uSync
---

uSync beta is here 🎉 for Umbraco 9 (AKA the NetCore Version)

The beta for Umbraco v9 .NetCore is out, and what better way to quickly get up to speed with how it works then syncing some of your existing site settings into a shiny new Umbraco v9 site?

You can dive straight in via NuGet:
<pre class="nuget">
PM> install-package uSync -version 9.0.0-beta001
</pre>

# 🌟 Whats New in uSync 9.0 ?
Well mainly uSync works on .netCore versions of Umbraco!- but there are a couple of other changes of note too.

## 📐 Settings and 📃 Content together at last 👩🏼‍🤝‍👩🏼
Starting with uSync 9 - we are merging uSync and uSync.ContentEdition. You will no longer need to install content edition to get all the content, media and other bits. they will come as part of the core uSync package. 

This doesn't all your content will start syncing, you can still turn everything on or off as before, but now you don't need extras just to get the content as part of your sync. 

## v8 compatibility ✔⭐
uSync 9 works with the files produced by uSync 8 - which means you can pick up the uSync folder from an existing site, plop it onto your shiny new Umbraco site, and uSync will import it all for you.

The only difference is the default folder path is now `/usync/v9`, but the files are the same - this just acts as one final "are you sure" renaming a `usync/v8` folder to `usync/v9` is all you need to do<sup>1</sup>.

**See our [uSync Migration guide](https://docs.jumoo.co.uk/uSync/v9/migration/) in the docs for more info**

*<sup>1. </sup>We can't rewrite your views or custom code for you, but we can move your datatypes, doctypes, content and all your media.*


## Refreshed UI 💻
We have purposely not done a load of changes with the version of uSync. Moving it to .netCore and migrating to the new way of working was enough. but we have taken this opportunity to give the default UI a little update. 

![uSync 9 UI](/images/2021/usync9-beta.gif)

This also helps now that settings & content are all part of the same package, you can quickly just sync settings or just sync content. 

## NetCore goodness. 
While we have kept functional updates to a minimum. We have taken the opportunity to take advantages of the goodies that come as part of Umbraco on NetCore. 

There is [more info on this on our docs site](https://docs.jumoo.co.uk/uSync/v9/)

So uSync 9 has updates for how we handle:
- Options 
- Notification Handlers 
- Interfaces 

## Just click on options!
Options are quite cool in .netCore - uSync will start up without any changes to code or config. (default in the class).

but you can quickly change things in your `applicationsettings.json` file or plop some updates in your startup.cs if you really fancy. 

e.g a few lines can setup how uSync behaves at startup

```c#
 services.AddUmbraco(_env, _config)
    .AddBackOffice()             
    .AddWebsite()
    .AdduSync(o => {
        o.ImportAtStartup = uSyncConstants.Groups.Settings; // import settings at startup.
        o.RootFolder = "/uSync/v8/"; // use a v8 folder for uSync
        }) 
    .AddComposers()
    .Build();
```

**N.B in the beta you cannot save options from the UI. this may remain true, we are just working out if it still makes sense to let people do this with netcore**

# Code
The move to netCore has brought about quite a few changes in the core Umbraco code and that is reflected in uSync's code base too. there aren't many major changes, but if you interact with uSync via code you **will** notice them.

## Notification Handlers
Umbraco has done away with events, so no longer do you listen for changes with `ContentService.Saved +=`. Instead you implement notification handlers to get notified of when things happen.

Within uSync we've done the same so now if you want to know when an import is starting or completed, you can subscribe to the `uSyncImportCompletedNotification` and you will get all the info you need.

## Tidy interfaces 
As uSync has developed the Interfaces uses have to, which means like any mature products we have Interfaces, and `ExtentedInterfaces` and `Interface2` interfaces. 

because everything else has been changing, we used this as a chance to clean up the interfaces so for example our `ISyncSerializer` interface now encapsulates everything from the `ISyncSerializer`, `ISyncExtendedSerializer` and `ISyncItemSerializer` interface, all the serializers implemented all of them anyway, now they just have one interface.

We are hoping the interfaces will remain quite stable now, but if we do need to change, then we will have [Default interface members](https://devblogs.microsoft.com/dotnet/default-implementations-in-interfaces/) from c# v8 so that is going to help 😊

# Try it now. 
You can get the uSync beta from NuGet. 

<pre class="nuget">
PM> install-package uSync -version 9.0.0-beta001
</pre>

or you can add it directly to your websites `.csproj` file and rebuild.

```xml
<PackageReference Include="uSync" Version="9.0.0-beta001" />
```

## Feedback. 
If you have any feedback we would love to hear it. you can report issues/feature requests or questions via the [issues log on the repo](https://github.com/KevinJump/uSync8/issues).

## Whats Next ?
We are going to be busy making sure uSync can be released on the same time frame as Umbraco 9. We will be working on ironing out any bugs and working on the known issues for this beta. We are also going to be updating the documentation site. to make sure we have somewhere you can find all those applicationsettings.json settings!

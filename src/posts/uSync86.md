---
title: uSync.Complete 8.6
date: 2020-04-21 15:12:45
tags: 
 - umbraco
 - uSync
---

It's April so we thought it was time for a feature release of uSync.Complete for Umbraco 8 (and besides we've written it now!) . So say hello to uSync.Complete 8.6

## uSync.Complete 8.6 is here 
> _Although we are keeping up with the release cadence of Umbraco, we are also trying to maintain backward compatibility. so uSync 8.6 works with all versions of Umbraco 8.x_

## New Features
We've packed in some cool new features with this version of uSync.

### Publish to Server button
A feature we release in beta a few versions ago has now been switched on by default, the _Publish to server_ button lives inside the Umbraco Publish and Save button:

![Publish to server button](/images/2020/publishtoserver.png)

Using this button - you get a dialog to pick your server and publish the pages. 

![publish dialog](/images/2020/publishdialog.gif)

This view gives you a much more integrated view of publishing to other servers, it's all right there under the publish button!

### Network mode

One thing we've been working on is making it easier to get started with the uSync Publisher config. Its a delectate balance of simplicity vs powerful config. 

In v8.5 we introduced templates to help you pick the type of server you want and in v8.6 we are introducing `Network` mode - so you can have one config across multiple servers. 

Network mode lets you specify what servers can be seen by each server in your config. 

![Network Mode config can be done for each server in your config](/images/2020/allowedserver.png)

By picking what servers can be seen for each server in the config, you can have a single config file that will work for all your servers in your setup.

> _Network Mode setting defines what can be seen in the UI, it is not security settings - you should still use the restrictions in web.config to tie access down between machines in your network_

For more info on Network Mode see the [config documentation](https://docs.jumoo.co.uk/uSync/uSync.Complete/publisher/server/)

### Server messaging 

You can now specify custom to appear when a user pushes/pulls from a server, great if you want to give your users a little encouragement. 

![Custom server messages](/images/2020/custommessage.png)


### Public Access support.
You can now sync your public access settings between sites, so if you have protected any content behind a login page, that to can be synchronized. 

At the moment you do this via the uSync publisher dashboard, behind the 'sync' button where you can sync non-content items. 

*At the moment we are thinking about how this might best be integrated with a main content push and if that actually makes any sense.*

### Support for Inline media/files
We've added support for media and files that are added directly to content, that is content where the File Upload or Image Cropper property type are used. Now personally I wouldn't do this, it is probably better to have all the media referenced in the media section, but if you do have this setup in your site, we support it now. 


### Lots of little UI tweaks.
Our main theme with the 8.6 release have been to polish the UI a bit and make it simpler to configure and use uSync. so across the board there are lots of little UI changes to hopefully make the whole process easer on you and your users.

So things like the new user group picker make it easier to manage what groups can see what servers.

![The new user group picker, is just one of may UI tweaks in this release](/images/2020/usergroups.png)


## Get It now.
So there you have it, uSync.Complete 8.6 with all its shiny new features is out now. you can get it either via nuget or as an Umbraco Package from our.umbraco.com.

<p class="text-center">
[How to get uSync.Complete 8.6](https://jumoo.co.uk/uSync/complete)
</p>
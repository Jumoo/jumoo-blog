---
title: 'Umbraco : Multiple Developers, Multiple Databases, One site.'
tags:
  - Tools
  - Umbraco
  - uSync
date: 2017-10-04 10:48:40
---

uSync was written to allow you to source control your Umbraco site, by extracting the Umbraco database configuration to disk, you have all parts of your Umbraco site on disk, and you can use your favourite source control system to manage your site.

With your site source controlled, you can have multiple developers working on your site independently of each other. That means everyone working on their own installation with it’s own database.

Working with uSync this way is relatively painless, but there are a couple of little setup tweaks that can make working this way easier.

## First setup your site:

The first thing you want to do is create your new umbraco project:

### **Install** Umbraco** in Visual Studio**

Create an empty asp.net project in visual studio. We are going to install Umbraco via nuget, and everything we need will come with that install, so we don’t want any extras.
<pre>Install-Package UmbracoCms</pre>

### .gitignore

One of the things you won’t want floating about in your source control, is all the bits of umbraco that don’t change. A default install of Umbraco 7.5.0 has around 3000 files but most of them won’t as you develop your project.

Most source control solutions will give you an initial .gitignore file for visual studio solutions and these will ignore most project specific files you don’t want.

Umbraco adds target files to your solution files that actually means the umbraco files ( mainly umbraco and umbraco_client) are copied from the nuget folder when you build the site, as such we don’t need to include them as part of our source control repository - so add these extra lines to your .gitignore file:
<pre># Umbraco Things
**/[Uu]mbraco/
**/[Uu]mbraco_[Cc]lient/
**/App_Data/
**/App_Data/[Pp]review/
**/App_Data/TEMP/
**/App_Data/NuGetBackup/
**/App_Data/Umbraco.config
**/App_Data/cache/</pre>
This means the number of files in our repo will fall from over 3000 to around 70\. These are all we need to get our site installed and building on another machine

### Build and install your site

Once umbraco is installed, you should build your solution load it up in a browser - to get your umbraco site up and running.

**Pick your flavour of database storage:**

mostly it doesn’t matter what database you use, there are a few packages that don’t work with SqlCE (i.e Dialogue) but if you're not planning on using them you can pick anything here.

Don’t install a starter kit (unless you want to)

This the base install for our project; so unless you are going to build your site based on one of the starter kits I wouldn’t install one.

### Database** Connections**

It is worthwhile taking some time to consider how all your developers are going to set up their local databases.

Umbraco stores the connection string for the database in the web.config and while you can move this out using a configSource setting, that can be a bit of a faff. It is much easier to have a standard way of setting things up so the web.config is the same for all developers.

If you are using SqlCe Locally, then you are fine, umbraco will put the database in the app_data folder of the solution, we don’t copy this file (because we want our own db) but we can easily recreate it when the developer first pulls the site down from source control.

If you want to use SQL or SqlExpress then you just need to ensure that the connection string on each development pc is the same, this means either using the ‘.’ notation ‘localhost’ or some hostname you have configured on all machine. This isn’t a shared DB between devs, we are still talking about each dev having their own ‘local’ copy of umbraco.

Having a standard for the connection string, means we don’t have to worry about tweaking web.config or having different web.configs between all of our developers, so it’s worth thinking about.

### **Install uSync (&amp;** content** edition if you want content too)**

uSync is the glue that allows you to all the umbraco bits of config on the disk rather than the database. If you install uSync via nuget
<pre>install-package uSync</pre>
If you run your site after uSync is installed, you will see a uSync folder created within your site, this will contain all the config files. For usync. If you want to also store the content for your site, you can install uSync.ContentEdition
<pre>Install-package uSync.ContentEdition</pre>
Content edition will create a uSync\data\content and uSync\data\media folder to store all the content and media config for your site.

### **Check** everything** in. **

At this point you have set up your base, site if you check everything in, your source control will now contain everything another developer will need to re-create your solution.

## Getting other people set up on your site

It’s all very good having your site in source control, and indeed if you are a single developer on a project this might be all you need to keep your site under control. But if you are working with others, then they will need to be able to get your code and run up your site.

1.  **Check out the repo locally**
2.  **Build the repo**
3.  **Initialize your database**
When you first start your umbraco install on a new machine - you will get a YSDO - not because we have done anything wrong, but because our database is missing.

The simplest way to do this is to change the web.config so that umbraco thinks that it hasn’t been installed and it will run the install again and let you create the database:

*   *   Remove the Umbraco Version number from the web.config
    *   Remove the UmbracoDSN connection string from web.config
    *   **View the site in a browser**
Once you have made these config changes, run the site through your web browser.

If you have removed the settings from the web.config you will be presented with the install screen, so at this point you walk through the install - selecting custom and not installing a starter kit - you want a blank site for your project to build on.

Once the install is complete umbraco will startup pointing to your new local database. At this point uSync will kick in and take all the files from the uSync folder and push those settings (and content) into your umbraco site. This might take a few minutes if you have lots of content but at the end of the process you will have an exact copy of the site you started with, and if all has gone well you should know be able to work back and forth with other developers on the same umbraco project.

### Check the web.config

If all has gone well then your web.config will have not changed between installations,you will have created a new database, but it will be the same as the one inside the web.config

## Working across machines

In general this setup will now, ‘just’ work. Checking in changes from any repo and then checking them out at the other end will result in the changes being propagated around all your installations. In Order to keep things running smoothly you just need to keep an eye out for a few simple things.

### Nuget all the things,

Wherever possible use nuget, because it will handle any dlls you might have in your site. Having non-nuget stuff in your solution can become a pain, but if you have to follow some basic rules.

### Packages

In general packages will be fine, but if the package includes dlls and you didn’t nuget it you will need to explicitly include those dlls in your .gitignore file (Or create your own nuget packages)

uSync will capture any doctype, data type stuff a package creates, it’s only if a package does its own custom sql type stuff that you will have to worry (i am not aware of many / any that do).

### Making sure you are in sync

Another thing that people often get caught out on, is making changes out of sync. So if you create a doctype on your local site, while another developer also creates the doctype you are going to get issues. uSync can resolve some of these issues, if things are close enough it will match them and hopefully sort itself out, but you can end up with all sorts of clashes and issues.

It's a question of good habits, never make a change if you haven’t already synced your install with source control. Make sure you have all the settings before you go around creating new ones.

## Summary

With this configuration you should now have a all developers working on their own installations of umbraco. Committing to a single source and sharing changes. Next you will want to deploy you combined site to somewhere people can actually look at it, and for that there are a number of options, which we will cover in subsequent posts.

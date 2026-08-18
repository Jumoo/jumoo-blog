---
title: v12.2 - Background Publisher
date: 2023-09-27 12:22:00
tags: 
- uSync
- Umbraco
---

New in uSync v12.2, the Background Publisher allows you to change how pushing and pulling happens inside uSync. From a front end client driven process to a backend server -> server process. 

This offers up new opportunities, such as the ability to move on and let the publish happen without watching it, *scheduled* & **versioned** publishing at set times and dates, and easier integration with things like hangfire and command line deployments (code coming soon!).

## Choosing the Background Publisher 

You can choose to use the Background Publisher for any of your configured servers. 

If you got to the advanced section of the server setup you can choose from the list of available publishers (in v12.2 this is realtime or background).

![Selecting the background publisher](/images/2023/background-select.png)


## Using the Background Publisher

When you come to use the Background Publisher, it is very similar to using the existing 'realtime' publisher.

Pushing or pulling between servers brings up the same menus, and the job will progress as it does normally. 

**With the Background Publisher, there is no 'report' stage, the job is pushed in the background so it will push the changes without a report.**

![Background publishing options](/images/2023/background-publish.png)


## Walk away / carry on with something else.

One big difference with the Background Publisher, is that you can go do something else while long running jobs are processing. They are now happening completely in the background and don't need the browser to do anything. 

![Background publish](/images/2023/background-progress.png)

When you push or pull items, you will see a message across the bottom of the page, telling you that the job is processing in the background and you can leave if you want to.

*If you don't leave you still get all the progress messages and can watch the job progress from one site to another, but you don't have to.* 

## Versioned Scheduling. 

With the background processor, you can enjoy **versioned** scheduling. You can set the date and time you want content to be pushed or pulled between servers. The version of the content from when you created the job will be used.

This means you can stage changes on your site for a date and time, and when it arrives the version you have prepared will be used (this is great for product launches!).
 

## View Jobs in The Audit-Lot

The Background (and existing realtime) Publisher integrates nicely with the new uSync Audit Log feature, so you can see what jobs are scheduled or running on your site, from the log. 

You can even go in and see what changes where pushed or pulled in any given process.

![Audit log view of jobs](/images/2023/audit-log-processing.png)

For more details on the audit log, [read our audit blog post!](/2023/v12-audit-log)

### Summary
The Background Publisher is a great addition to how uSync.Complete pushes and pulls content and settings between servers. We are really excited to bring it to v12.2.

On the surface not much changes with the Background Publisher, but it enables so many cool new possibilities. Sending jobs is now as a simple as adding a request to the in built uSync processing queue. You will be able to use scheduling tools such as Hangfire
or command line utilities such as the uSync command line to kick off pushes, pulls, imports and exports across your sites. 

We are really happy with the Background Publisher and in future versions we might make it the default publisher, but we are keen to see what you think. 

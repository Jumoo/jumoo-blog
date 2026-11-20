---
title: uSync.TimeMachine in practice
date: 2026-11-20 14:31:51
tags:
  - uSync
  - Umbraco
---

TimeMachine arrived in [uSync.Complete 17.5 / 18.2](/2026/usync-complete-17-5), and it's had a few releases to settle in since. This post walks through the job we built it for: someone has changed the site, it's wrong, and you want it back the way it was.

<pre class="nuget">
dotnet add package uSync.Complete
</pre>

# The problem

uSync is very good at telling you how your site differs from the uSync folder. What it can't tell you is history. If a page title changed on Tuesday, uSync doesn't know who changed it, whether it came from an editor or an import, or what it said before.

That's usually the question you're trying to answer when something has gone wrong. "Who imported the dev uSync folder onto staging?" is a very different conversation from "who edited the home page?".

# A bad import

Here's the example we'll use. Tom has imported a uSync folder that came from a developer's machine. It had a few test values in it, and now the home page title says _Home page (dev copy - do not publish)_. It's published.

Open TimeMachine (it lives under uSync in the Settings tree) and the import is at the top of the timeline:

![The TimeMachine timeline, with Tom Reed's rollback and import at the top and earlier back office edits below](/images/2026/timemachine-practice-timeline.png)

Every back office save, publish, move and delete is an event, and a whole uSync import is one event however many items it touched. The badge on the right tells you where it came from (**Back office** or **uSync**), and the chips under an import tell you what kind of things it changed.

## Finding the right event

On a busy site the timeline gets long quickly. You can filter by where the change came from, and by user:

![The TimeMachine timeline filtered to Tom, showing only Tom Reed's imports and edits](/images/2026/timemachine-practice-filter.png)

## Seeing what changed

Click the event and you get every item it touched, with the property values before and after:

![The details of Tom Reed's import, showing the dictionary item, Welcome and Spring Offers titles with their old values struck through and their new values in green](/images/2026/timemachine-practice-import.png)

This is often enough on its own. A lot of "the site's broken" turns out to be one property on one page, and once you can see it you can just go and fix it.

# Rolling it back

Each item in the event has a tick box. Untick anything you want to keep, then press **Roll back…**.

You don't go straight to changing things. TimeMachine runs the rollback through uSync as a report first, so you get the usual uSync list of what will change. Click an item and you get the side-by-side view from [17.7](/2026/usync-complete-17-7-side-by-side), with the item as it will be after the rollback next to how it is now:

![The side-by-side view of the Welcome page, with the title after the rollback on the left and the current dev-copy title on the right](/images/2026/timemachine-practice-preview.png)

If you're happy, press **Roll back** and it's done.

## A rollback is an event too

The rollback goes onto the timeline as its own event ("Tom Reed rolled back 3 changes", at the top of the first screenshot). So if you roll back the wrong thing, you can roll the rollback back.

If an item changed several times in the same event, TimeMachine unwinds the changes newest first, so you end up with the item as it was before the first of them.

## Your uSync folder gets fixed too

A rollback imports the "before" version of each item through uSync, and we deliberately leave uSync's export-on-save running while it does it. That means the uSync folder on disk is updated to match the rolled-back site.

If we didn't, the next import would put the bad values straight back.

_The honest caveat: this fixes the folder on the server you rolled back on. If the bad files are in source control and your deployment imports them, the next deployment will bring them back. You still need to fix them at the source._

# What it won't do

- **Media files.** Rolling back a media delete brings the media item back, but not the file if Umbraco has already removed it. uSync's media XML doesn't carry the file.
- **Blueprint updates.** These can't be rolled back, because Umbraco doesn't raise the notification we'd need. TimeMachine tells you rather than failing quietly.
- **It's not a backup.** TimeMachine is for individual changes. If you want a copy of the whole site to go back to, that's what [restore points](/2023/v12-restore-points) are for, and the two work well together.

# Turning it on

TimeMachine is **off by default**, because recording means serialising every item on every save and we didn't want anyone upgrading to find their saves slower. Turn it on in appsettings:

```json
"uSync": {
  "TimeMachine": {
    "Enabled": true,
    "RetentionDays": 30
  }
}
```

It picks the setting up without a restart. Events older than `RetentionDays` are cleaned up automatically, because every save stores the item and the tables grow quickly on a busy site.

# Try it

TimeMachine is part of uSync.Complete, which you can install and use for 60 days without a licence.

<pre class="nuget">
dotnet add package uSync.Complete
</pre>

There's more about it on the [uSync.Complete page](https://jumoo.co.uk/usync/complete/#timemachine), and every release's changes are in the [release notes](https://github.com/Jumoo/uSync.Complete.Issues/releases).

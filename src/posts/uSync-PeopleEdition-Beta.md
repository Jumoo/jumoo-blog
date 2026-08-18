---
title: uSync PeopleEdition - Beta 1
date: 2019-08-08 11:54:59
tags:
 - Umbraco
 - uSync
---

*Delivering on our [uSync Roadmap](../usync-roadmap) we have pushed the first beta releases out for a number of the uSync Expansion Pack packages.*

*These first releases give us an opportunity to show you our progress and get some feedback on the things we are doing.*

# uSync.PeopleEdition
Sync Members and Users between umbraco installations!

uSync.PeopleEdition brings 4 new sync handlers to usync

- Member Handler
- Member Group Handler
- User Handler
- User Group Handler 

Together these four mean you can export all the member or users from one umbraco site and import them into another*

![People Edition Dashboard](/images/usync/people/peopleedition.png)

By default the handlers are disabled from the main sync that is all your main uSync Imports/Exports will not include members or people, but you can use the people dashboard to perform these syncs into the uSync folder. 

Enabling these handlers in the main sync does open them up to being used in the group imports/exports and you can even create [snapshots](../uSync-Snapshots-Beta) of members or users to migrate to another site.

## N.B. Passwords & Admin
**in-order for passwords to sync correctly all sites being synced must share a machine key setting**

**For security/sanity reasons uSync.PeopleEdition will not import over the main umbraco admin user, just so things don't break**

---
title: v16 Package Releases
date: 2025-06-12 10:52:14
tags:
  - uSync
  - translations
  - umbraco
---

Today (12th June 2025) sees the release of the next short-term support (STS) version of Umbraco.

v16 of Umbraco is the 3rd release since the major updates to the backoffice using WebComponents and a modern set of APIs to manage Umbraco.

Our packages have kept pace with these releases, so today we are releasing updates to all our major packages to run on Umbraco v16 with some of our more "minor" packages still to come.

## Our v16 Releases

We have v16 releases for all our major (and some less major) packages:

- [uSync](https://github.com/KevinJump/uSync/releases/tag/v16.0.0)
- [uSync.Complete](https://github.com/Jumoo/uSync.Complete.Issues/releases/tag/v16.0.0)
- [uSync.Forms](https://github.com/KevinJump/uSync.Forms/releases/tag/v16.0.0)
- [uSync.CommandLine](https://github.com/Jumoo/uSync.CommandLine/releases/tag/v16.0.0)
- [Translation Manager](https://github.com/Jumoo/Jumoo.TranslationManager.Issues/releases/tag/v16.0.0)

### Translation Connectors

Translation Manager is released with a number of built in and additional connectors, so today we have also released updates to the following connectors:

- XLIFF Connector,
- Microsoft Connector,
- Google Connector,
- Passthrough Connector,
- [DeepL Connector](https://www.nuget.org/packages/Jumoo.TranslationManager.Connector.DeepL/16.0.0),
- [OpenAI Connector](https://www.nuget.org/packages/Jumoo.TranslationManager.OpenAi/16.0.0),
- [LanguageWire Connector](https://www.nuget.org/packages/Jumoo.TranslationManager.LanguageWire/16.0.0)

## Updated Documentation

[Our documentation](https://docs.jumoo.co.uk) has been updated too to reflect the latest versions.

## Stability Towards v17

v16 of Umbraco is the last short-term support (STS) version before the next major long-term support (LTS) release v17. This is the release that most people will jump to from the last LTS release, v13. v13 uses the old backoffice, and it is quite a jump in terms of technology and setup.

With that in mind, for the v16 releases of our products we are focusing on making the experience as stable and smooth as possible, so jumping from v13 to v17 will be as painless as it can be. This means we will not be adding any major functionality to the packages in v16 releases (we do have some in mind, but we are waiting!). Instead, we are testing and fixing all possible issues in v16 so it can be stable when we update.

## Migrating

With v17 due out in November we are starting to looking at how our packages might help people migrate from v13 of Umbraco to v17 and beyond.

### uSync "legacy" Migrations

uSync now has some simple migrations built in. If you start an Umbraco site with old uSync folders (e.g "uSync/v9"), uSync will present a legacy tab, and give you options to migrate this over to the latest version of uSync. Internally, uSync now has some basic migrations that it will do on the fly to bring a v13 style site up to v16. This includes adding support for variant blocks, updating block configs in RTE properties, and some other minor updates.

![uSync's legacy dashboard.](/images/2025/legacy.png)

It does not include larger migrations tasks, such as migrating grid elements to blockgrid elements. This is more complex and requires a slightly more complicated process.

### uSync.Migrations

Our [uSync.Migrations](https://github.com/Jumoo/uSyncMigrations) package is much more powerfull and can migrate almost anything<sup>\*</sup> from one version of Umbraco to another. At the moment, Migrations only supports migrating up to Umbraco v13. With v17 just around the corner, we are starting to look at how Migrations might look on the new backoffice, and what we can do to make the transition easier (we expect a v13 to v17 migration to actually be a bit easier than a v8 to v13 one might have been).

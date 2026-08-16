---
title: AI Translations
date: 2025-10-06 14:13:44
tags:
  - umbraco
  - translations
---

Today we have released the first full version of our new AI connector for Translation Manager
and you can install it today and get playing.

<pre class="nuget">
dotnet add package Jumoo.TranslationManager.Ai
</pre>

## More than just OpenAi.

You might not be aware, but we already have an AI based connector for Translation
Manager. our OpenAI connectior is now over two years old! So why are we releasing
another one?

Well 2 years is a very very long time in the world of AI and quite a long time in
the world of packages built around AI, in the time since we released our OpenAI we
have have 3 diffrent underling AI libraries to help us talk to the AI, and now
most of them are out of date too.

Also there are way more AI tools than just OpenAI and we think its time we looked
at making it easier to choose which tool you might want to use with your translations.

## Multiple AIs

At the moment! for c# at least the world appears to be co-allaessing around the
Microsoft.Extensions.AI libraries and the Microsoft.SemanticKernel packages which
give an abstraction layer between your code and the AI's which mean its hopefully
simpler to switch between AI providers.

As such our new AI provider uses these microsoft libraries and now requires significantly
less code to plug a new AI provider into the translation process in umbraco.

With the release candidate we are supporting

- OpenAI
- Azure AI Foundry
- Github reference models.
- Claude
- Ollama

We are always looking to expand this to include as many of the popular AIs as we
can (assuming we get can find a supporting IChatClient library for them.)

## Enhanced configuration

The new AI connector also supports way more configuration, You can now set more AI parameters and have more
insight into just how many tokens are being used for the translation. Great if you know your TopP from your TopK, and not really something to worry about if you don't

## Translation Memory

One of the advantages of the new connector is support for Translation manager v16's Translation Memory fearure,
which can reduce the ammount of data being sent to the AI providers, increasing translation speed and reducing
the costs of the translations.

_The Translation memory feature only works with machine and AI translators. and stores simple phase/language pairs to reduce the amount of round trips to external services._

## Background support

Again with v16 this connector now also works with the new background submit feature which allows you to send jobs off to be translated in the background - great if you have 1000's of pages to translate you no longer have to sit and stare at the screen while it all happens.

## AI/OpenAI Connector Support

At the moment the OpenAI connector is still supported has versions for Umbraco 13 through to v16. The Newer Jumoo.TranslationManager.AI connector supports Umbraco v13 and v16 (but not versions inbetween).

As we progress towards v17 of Umbraco its our intention to only move the latest "AI" connector to v17 and
slowly removing support for the single OpenAI connector.

## Extending.

The new AI connector can be extended by developing your own IAITranslatior classes.
We will soon release documentation on how you can extend the connector to work with other AI providers (this will hopefully be a single file, not to much conifg!)

## Try now.

You can download and install this version of our new AI Connector now, and use your 'favorite' version of AI
to translate your content.

<pre class="nuget">
dotnet add package Jumoo.TranslationManager.Ai
</pre>

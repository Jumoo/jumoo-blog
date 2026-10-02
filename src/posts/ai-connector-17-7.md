---
title: AI Connector 17.7
date: 2026-10-02 13:01:57
tags:
  - Umbraco
  - translations
---

We have just released v17.7 of the AI connector for Translation Manager. Most of the work in
this one is under the hood, and it makes translations faster and a bit cheaper.

<pre class="nuget">
dotnet add package Jumoo.TranslationManager.AI
</pre>

## Fewer requests

In 17.7 the connector batches things up better. It gathers everything on a page together and
sends it to the AI in as few requests as it can. In our tests that reduced the number of
requests by around 70%, and cut the time spent waiting on the AI by more than half.

## Lower costs

Fewer requests means we send the prompt far fewer times, and in our tests the input tokens
for a job dropped by around 40%.

The overall saving is smaller than that, because most AI providers charge a lot more for the
tokens they send back than the ones you send them, and the translated text itself doesn't
get any shorter. Across our test runs we have seen around **an 8% reduction in token costs**.

## More reliable

A few things that will hopefully go unnoticed:

- **Fewer retries.** When an AI provider is busy, the connector now makes far fewer retry
  requests before it gets an answer.
- **Longer timeouts.** Large translations can take a while, so each request now gets up to
  five minutes to finish.
- **Better splitting of long content.** Very long text is split at the end of a sentence, and
  HTML keeps all of its tags when it is split up.
- **Complete translations only.** If the AI stops part way through a translation, the
  connector reports it as an error, so you only ever get whole translations.

If you translate really big pages and the defaults are too short for you, the timeouts can be
changed in `appsettings.json`:

```json
{
  "Translations": {
    "AI": {
      "AttemptTimeout": "00:05:00",
      "TotalTimeout": "00:20:00"
    }
  }
}
```

## Get it

The update is available on NuGet now.

<pre class="nuget">
dotnet add package Jumoo.TranslationManager.AI
</pre>

You can see the full list of changes in the
[GitHub release](https://github.com/Jumoo/Jumoo.TranslationManager.AI/releases/tag/v17.7.0),
and there's more on setting up the connector in [the docs](https://docs.jumoo.co.uk).

Enjoy!

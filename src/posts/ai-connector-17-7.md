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

Until now the connector sent one request to the AI for every property it translated. A page
title was a request. A subtitle was another. Each request carries the whole system prompt
with it, so for a page full of short values you spent more time and tokens on the prompt
than on the actual content.

In 17.7 the connector gathers up everything on a page first and sends it in as few requests
as it can. On our test site, a 25 page job went from 102 requests down to 27, and the time
spent waiting on the AI roughly halved.

## Lower costs

Fewer requests means we send the prompt far fewer times, and in our tests the input tokens
for a job dropped by around 40%.

The overall saving is smaller than that, because most AI providers charge a lot more for the
tokens they send back than the ones you send them, and the translated text itself doesn't
get any shorter. Across our test runs we have seen around an 8% reduction in token costs. Not
earth shattering, but it's free, and on a big site it adds up.

## More reliable

A few things that will hopefully go unnoticed:

- **Retries don't pile up.** Some of the AI libraries were retrying failed requests on top of
  our own retries, so one rate-limited request could become 16. Now it's a maximum of 4.
- **Longer timeouts.** Large translations can take a while, and requests were being cut off
  after 30 seconds and sent again from scratch. They now get a lot longer.
- **Better splitting of long content.** Very long text is now split at the end of a sentence
  rather than mid-word, and HTML keeps all of its tags when it is split up.
- **No half-finished translations.** If the AI runs out of room and stops part way through, we
  now treat that as an error instead of quietly saving half a translation.

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

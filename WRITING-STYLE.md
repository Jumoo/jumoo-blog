# Writing style

How posts on this blog sound, derived from reading the ~190 existing posts.
Read this before drafting a post. For file/frontmatter/image mechanics see
[CLAUDE.md](CLAUDE.md) and [README.md](README.md) — this file is about voice and
shape only.

## The two kinds of post

Nearly every post is one of two things. Work out which one you're writing first,
because they have different shapes.

**Product posts** (2018–now, the bulk of recent output). Releases, betas,
feature write-ups, roadmaps, pricing changes for uSync, uSync.Complete and
Translation Manager. Tagged from the small set `umbraco` / `uSync` /
`translations`. See `roots.md`, `v12-restore-points.md`,
`translation-manager-feature-roundup.md`, `2024-prices.md`.

**Opinion posts** (2011–2017 mostly). Short, argued pieces about local
government web, content strategy, user needs, procurement. Tagged `LocalGov`,
`Content`, `User Experience`, `Analysis`, `web`, `Digital`. See
`user-needs-up-front.md`, `the-technology-probably-doesnt-matter.md`,
`art-is-knowing-when-to-stop.md`.

There is a third, rarer kind: **dev notes** — a technical how-to with real C#
and screenshots, tagged `dev-notes` / `code`
(`permission-based-dashboards.md`, `using-the-overlay-service.md`).

## Voice

- **First person plural for product, first person singular for opinion.**
  "We have released…", "we think", "we honestly do not know" for anything Jumoo
  ships. "I have seen lots of examples of this across 100s of sites" when it's
  Kevin's argument or experience.
- **Talk to the reader directly, as "you".** "You can install this now",
  "if you translate thousands of nodes at a time you will notice".
- **Conversational and British.** Contractions throughout. Dry asides in
  brackets. Occasional single-sentence paragraphs for emphasis. Words like
  "handy", "nice", "a bit", "sneak in", "off you go", "and that was your lot".
- **Honest to the point of bluntness.** This is the strongest signature of the
  blog. Say what didn't work, what took too long, what you're unsure about:
  "we are not big fans of subscription services", "the processing engine is
  probably the main reason we've had a bit of delay", "we honestly do not know
  where these tools are going to end up", "these price increases are in line
  with inflation 😔". Never write marketing copy. Never oversell.
- **Explain the problem before the feature.** Product sections almost always
  open with what was annoying, then what changed. "The problem was you couldn't
  really see any of it… That's all changed."
- **No hype, no exclamation-mark stacking** — though a single "🎉" or "Enjoy!"
  at the end is on-brand.
- **Assume a competent Umbraco developer reader.** Don't explain what a
  content type or a nuget package is. Do explain Jumoo-specific concepts
  (fancy merging, restore points, translation memory) from scratch.

## Shape

- **Length: 400–1,000 words.** Median is ~550. Feature round-ups and
  introductions run to ~1,100. Short "here it is" posts of 150–300 words are
  perfectly normal for a patch release.
- **Open with the news in the first sentence or two.** "Today we have released
  the first full version of our new AI connector…", "It has been a busy year
  for Translation Manager." No throat-clearing preamble.
- **Headings carry the structure.** `##` is the workhorse; `#` is used for
  major sections in longer posts (a post typically has 2–4 `#` sections, each
  with several `##` under it), and short posts often use only `##`. `###` for
  sub-points. Headings are plain and descriptive — "Getting it", "What's next?",
  "But Why?", "Try now."
- **Close with a call to action.** Product posts end with an install line and
  links to [the docs](https://docs.jumoo.co.uk) and the GitHub changelog.
  Opinion posts end on the argument's conclusion, restated plainly — often a
  single imperative sentence ("Deploy big things on a Tuesday or Wednesday.").
- **Opinion posts follow: claim → evidence → counterexample → so what.** They
  lean on real examples and cite research or GDS/NN Group links rather than
  asserting.

## Formatting conventions

- **Install commands** use the raw HTML block, not a code fence — the site has a
  style for it. Longer posts repeat it at the top and the bottom:

  ```
  <pre class="nuget">
  dotnet add package Jumoo.TranslationManager
  </pre>
  ```

- **Screenshots throughout.** Two-thirds of posts have images, and product posts
  average one per feature. Alt text is a real sentence describing what's shown
  ("Fancy merge lets you add properties on child sites and still get updates
  from the master"), not a filename.
- **Bullet lists for feature round-ups**, with the feature name in bold
  followed by a full stop and then prose: `- **Translate in place.** Translate a
  node's content into…`. Two or three sentences each, ending with the practical
  consequence.
- **Italics for asides and caveats** — version requirements, "not glamorous
  but", licensing footnotes. Frequently a whole italic paragraph on its own:
  `_Library translation needs Umbraco v18 and Translation Manager v18._`
- **Blockquotes for warnings, definitions and pull-quotes.** Often opened with a
  bold lead-in: `> **What is a 'Damaging Change'?**`.
- **Code fences** (```json, ```cs) for config and C#, with a sentence of
  explanation before each and often a comment inside. Config examples show the
  real `appSettings.json` nesting, not fragments.
- **Tables** for pricing, with old prices struck through (`~~£2500~~`).
- **Emoji, sparingly.** Mostly in titles (🎉 🚀 🏆 🌳 🎈) and the occasional
  in-text 😔 🤷 ☕. One or two per post, never a row of them.
- **Link generously** to Umbraco docs, GitHub releases, jumoo.co.uk product
  pages, and to earlier posts on this blog using site-relative paths
  (`/2023/2023-prices`).

## Titles

Short and literal. Version-led for releases (`v16 Package Releases`,
`uSync v14 Beta`, `v12.2 - Restore Points`, `uSync.Complete 8.9`). Plain noun
phrases or a stated position for opinion pieces (`User needs up front`,
`Staff are not customers`, `The technology probably doesn't matter`). No
colons-with-a-clever-subtitle, no "N things you should know".

## Things this blog does not do

- Marketing superlatives, "game-changing", "revolutionary", "seamless"
  (except literally, as in a seamless uSync import).
- Bullet-point summaries at the top ("In this post you'll learn…").
- Rhetorical-question openers used as filler.
- Hedged, committee-written pricing or roadmap language — awkward news is
  delivered directly, with the reasoning and the date.
- Long introductions. Get to the thing.

## Spelling

The archive was swept for misspellings in Aug 2026, so the posts should now be
clean — write it correctly rather than imitating the older typos.

British spellings throughout (licence, colour, organisation, behaviour,
analyse). "Licence" for the noun. US spellings appear occasionally in older
posts; don't add more.

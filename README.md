# blog

The Jumoo blog, rebuilt on Eleventy. Migrated from a Hexo-based site (formerly
`blog.jumoo.co.uk`) — posts, images, permalinks, tags and archives all carried
over as-is.

## Writing a new post

Create a new file in `src/posts/`, named after the post's slug (this becomes
the URL: `/YYYY/slug/`, where `YYYY` comes from the post's `date`):

```md
---
title: Your post title
date: 2026-08-16 09:00:00
tags:
  - umbraco
  - uSync
---
Whatever you want, in markdown. Images referenced as `/images/YYYY/file.png`
(matching `src/images/YYYY/`).
```

Then:

```bash
git add src/posts/your-slug.md
git commit -m "your-slug"
git push
```

## Local preview

```bash
npm install
npm run serve
```

Opens at `http://localhost:8080`.

## Structure

- `src/posts/*.md` — one file per post, Jekyll/Hexo-style frontmatter
  (`title`, `date`, `tags`). Permalink (`/YYYY/slug/`) is computed from the
  post's `date` and filename in `src/posts/posts.11tydata.js`.
- `src/images/YYYY/` — post images, referenced from posts as `/images/YYYY/file.ext`.
- `src/tags.njk` — generates one `/tags/<tag>/` page per tag.
- `src/archives.njk` — generates one `/archives/<year>/` page per year.
- `src/index.njk` — homepage: all posts grouped by year, newest first.
- `src/_includes/` — `base.njk` (page shell), `sidebar.njk` (about/tags/archives/recents),
  `post.njk` (single post layout), `archive-list.njk` (shared year-grouped post list).
- `src/style.css` — hand-written styles matching the original site's look
  (navy header, blue footer accent, Lato/Barlow/Pacifico fonts) — no Bootstrap
  or FontAwesome dependency.

## One-time deploy setup (not done yet)

1. Push this repo to GitHub.
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the `deploy.yml` workflow builds and publishes the site.

## Custom domain (blog.jumoo.co.uk)

`src/CNAME` carries the domain through the build (Eleventy copies it to
`_site/CNAME`, which GitHub Pages reads on every deploy).

1. **DNS**: add a `CNAME` record: `blog` → `<github-username>.github.io`.
2. **GitHub**: repo **Settings → Pages → Custom domain**, enter
   `blog.jumoo.co.uk`, save. Wait for the DNS check to go green, then tick
   **Enforce HTTPS**.

## Notes

- No comments, no share widgets — static content only.
- Tag URLs are slugified to match the old site exactly (spaces/punctuation →
  hyphens, case preserved) so old `/tags/...` links keep working.

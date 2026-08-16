# blog

The Jumoo blog, rebuilt on Eleventy. Migrated from a Hexo-based site (formerly
`blog.jumoo.co.uk`) — posts, images, permalinks, tags and archives all carried
over as-is.

## Writing a new post

```bash
npm run new-post
```

Prompts for a title and (optional) comma-separated tags, creates
`src/posts/your-slug.md` with the frontmatter filled in, and switches to a new
`post/your-slug` branch (if you were on `main`). You can also pass the title
and tags directly: `npm run new-post -- "Your post title" "umbraco, uSync"`.

Write the post, then:

```bash
git add src/posts/your-slug.md
git commit -m "your-slug"
git push -u origin HEAD
```

Open a PR into `main`. The `CI` workflow builds the site to check nothing's
broken; once the PR is merged, the `Deploy` workflow publishes the live site.
Posts aren't written directly to `main` — always via a branch + PR.

The post's URL (`/YYYY/slug/`) comes from its `date` (year) and filename
(slug) — don't rename a post file after publishing, that changes its URL.
Images go in `src/images/YYYY/`, referenced from post markdown as
`/images/YYYY/file.ext`.

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

## CI/CD

- **`.github/workflows/ci.yml`** — runs on every PR into `main`: `npm ci` +
  `npm run build`. This is the required status check on `main`'s branch
  protection — a PR can't merge if the build is broken.
- **`.github/workflows/deploy.yml`** — runs on push to `main` (i.e. when a PR
  merges): builds and publishes to GitHub Pages.
- Repo: [Jumoo/jumoo-blog](https://github.com/Jumoo/jumoo-blog) (public —
  GitHub Pages doesn't support private repos on the Jumoo org's Free plan).
  `main` is protected — direct pushes are blocked, all changes go through a
  PR with a passing CI build.

GitHub Pages is enabled (Source: GitHub Actions) and the custom domain is
already set to `blog.jumoo.co.uk` in the repo's Pages settings — that's why
`src/CNAME` exists (Eleventy copies it into `_site/CNAME` on every build, so
GitHub Pages keeps the custom domain setting even though it deploys from a
fresh artifact each time).

## Custom domain cutover (blog.jumoo.co.uk) — not done yet

The site is fully built and deploying (currently reachable at
https://jumoo.github.io/jumoo-blog/, path-prefixed so styling looks broken
there — that's expected, it's built for root-path serving). `blog.jumoo.co.uk`
still points at the old host. To cut over:

1. **DNS**: at jumoo.co.uk's DNS provider, change (or add) a `CNAME` record:
   `blog` → `jumoo.github.io`. This replaces whatever record currently points
   `blog.jumoo.co.uk` at the old Hexo hosting.
2. Wait for DNS to propagate, then check repo **Settings → Pages** — it
   should show the domain as verified with an option to **Enforce HTTPS**;
   tick that once available.

Once DNS points at GitHub, the old site stops being served and this one takes
over at the same URL.

## Notes

- No comments, no share widgets — static content only.
- Tag URLs are slugified to match the old site exactly (spaces/punctuation →
  hyphens, case preserved) so old `/tags/...` links keep working.

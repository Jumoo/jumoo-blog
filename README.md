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
- Repo: [Jumoo/jumoo-blog](https://github.com/Jumoo/jumoo-blog) (private).
  `main` is protected — direct pushes are blocked, all changes go through a
  PR with a passing CI build.

One-time GitHub Pages setup: repo **Settings → Pages**, set **Source** to
**GitHub Actions**.

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

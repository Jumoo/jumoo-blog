# blog repo conventions

Kevin's/Jumoo's public blog — a static site (Eleventy) migrated from a legacy
Hexo site. See [README.md](README.md) for structure and deploy mechanics.

## Workflow

New posts (and other changes) go on a branch, opened as a PR into `main`,
never pushed directly to `main` — branch protection enforces this. Merging a
PR is what deploys the site (`deploy.yml` runs on push to `main`). Use
`npm run new-post` to scaffold a post file and branch — see README.md.

## Writing a post

Voice, structure and formatting conventions for post content live in
[WRITING-STYLE.md](WRITING-STYLE.md) — read it before drafting a post.

- File: `src/posts/<slug>.md` — the filename becomes the URL slug
  (`/YYYY/slug/`), `YYYY` taken from the post's `date`. Don't rename existing
  post files — that changes their live URL.
- Frontmatter: `title`, `date` (`YYYY-MM-DD HH:MM:SS`, include seconds), `tags`
  (list). No `id` field — that was a Hexo artifact, stripped during migration.
- Tags are free-text and case-sensitive as separate tags on the old site
  (`Umbraco` and `umbraco` are distinct tags there) — match existing tag
  casing/spelling when tagging a new post unless deliberately starting a new tag.
- Images live in `src/images/YYYY/`, referenced from post markdown as
  `/images/YYYY/file.ext` (absolute path, not relative).
- Posts are rendered as plain markdown (`templateEngineOverride: "md"` in
  `src/posts/posts.11tydata.js`) — Liquid/Nunjucks syntax in post body content
  (e.g. `{{ }}` in code samples) is NOT processed as a template, it renders literally.

## Style

- `src/style.css` is hand-written, no Bootstrap/FontAwesome/CDN framework —
  intentional simplification vs. the original Hexo theme. Keep it that way;
  don't reintroduce a CSS framework dependency.
- Visual identity intentionally matches the original site: navy header/footer
  (`#292c44`), blue accent (`#4f80e1`), Lato body / Barlow headings / Pacifico
  wordmark for "jumoo".

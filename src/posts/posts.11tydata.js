const fs = require("fs");
const path = require("path");
const { DateTime } = require("luxon");

// The first site image in a post (markdown or <img>) that exists, for its share preview.
// Only /images/ paths - base.njk prefixes the image with the site url.
const firstImage = (inputPath) => {
  const content = fs.readFileSync(inputPath, "utf8");
  const images = content.matchAll(/!\[[^\]]*\]\((\/images\/[^\s)]+)|<img[^>]+src=["'](\/images\/[^"']+)/g);
  for (const match of images) {
    const image = match[1] || match[2];
    if (fs.existsSync(path.join("src", image))) return image;
  }
  return undefined;
};

// A plain-text summary for the share preview: the post's first prose paragraph,
// markdown stripped, cut at a word boundary. Posts can set `description:` instead.
const excerpt = (inputPath, max = 200) => {
  const body = fs.readFileSync(inputPath, "utf8").replace(/^---[\s\S]*?\r?\n---/, "");
  const paragraph = body
    .replace(/```[\s\S]*?```/g, "")
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    // Skip headings, quotes, images, html, tables, lists, rules and [bracketed notes].
    .find((p) => p && !/^(#|>|!\[|<|\||[-*+] |\d+\. |---)/.test(p) && !/^[*_]*\[[^\]]*\][*_]*$/.test(p));
  if (!paragraph) return undefined;
  const text = paragraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_`~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max)).replace(/[\s,.;:!?-]+$/, "") + "…";
};

module.exports = {
  layout: "post.njk",
  templateEngineOverride: "md",
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => {
      const year = DateTime.fromJSDate(data.date, { zone: "utc" }).year;
      return `/${year}/${data.page.fileSlug}/`;
    },
    // frontmatter `image:` wins, then the post's first image, then site.image.
    image: (data) => data.image || firstImage(data.page.inputPath),
    description: (data) => data.description || excerpt(data.page.inputPath),
  },
};

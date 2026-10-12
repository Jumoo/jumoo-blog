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
  },
};

const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function tagSlug(tag) {
  return tag
    .replace(/[^a-zA-Z0-9-]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/nav.js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addFilter("year", (dateObj) =>
    DateTime.fromJSDate(dateObj, { zone: "utc" }).year
  );

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const dt = DateTime.fromJSDate(dateObj, { zone: "utc" });
    return `${dt.toFormat("cccc, LLLL")} ${ordinal(dt.day)} ${dt.year}`;
  });

  eleventyConfig.addFilter("tagSlug", tagSlug);

  eleventyConfig.addFilter("byTag", (posts, tag) =>
    posts.filter((post) => (post.data.tags || []).includes(tag))
  );

  eleventyConfig.addFilter("byYear", (posts, year) =>
    posts.filter((post) => DateTime.fromJSDate(post.date, { zone: "utc" }).year === year)
  );

  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("years", (collectionApi) => {
    const posts = collectionApi.getFilteredByGlob("src/posts/*.md");
    const years = new Set(
      posts.map((post) => DateTime.fromJSDate(post.date, { zone: "utc" }).year)
    );
    return [...years].sort((a, b) => b - a);
  });

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const posts = collectionApi.getFilteredByGlob("src/posts/*.md");
    const tags = new Set();
    posts.forEach((post) => (post.data.tags || []).forEach((tag) => tags.add(tag)));
    return [...tags].sort((a, b) => a.localeCompare(b));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};

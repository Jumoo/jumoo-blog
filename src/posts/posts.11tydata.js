const { DateTime } = require("luxon");

module.exports = {
  layout: "post.njk",
  templateEngineOverride: "md",
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => {
      const year = DateTime.fromJSDate(data.date, { zone: "utc" }).year;
      return `/${year}/${data.page.fileSlug}/`;
    },
  },
};

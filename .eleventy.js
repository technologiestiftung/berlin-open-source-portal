module.exports = function (eleventyConfig) {
  // This allows Eleventy to watch for file changes during local development.
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/css/style.compiled.css");
  eleventyConfig.addPassthroughCopy({ "src/assets/common": "." });

  eleventyConfig.addWatchTarget("./src/assets/css/style.compiled.css");

  eleventyConfig.addCollection(
    "tagList",
    require("./src/_filters/getTagList.js")
  );

  eleventyConfig.addCollection("navItems", function (collectionApi) {
    const navItems = collectionApi.getFilteredByTag("nav");

    const sortedNavItems = navItems.sort((a, b) => {
      const getPositionTag = (item) => {
        return item.data.tags.find((tag) => tag.startsWith("nav-item-"));
      };

      const aTag = getPositionTag(a);
      const bTag = getPositionTag(b);

      if (aTag < bTag) return -1;
      if (aTag > bTag) return 1;
      return 0;
    });

    return sortedNavItems;
  });

  eleventyConfig.addFilter("relativeTime", (date) => {
    const delta = Math.round((new Date() - new Date(date)) / 1000);

    const minute = 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7,
      month = week * 4,
      year = month * 12;

    switch (true) {
      case delta <= week:
        return "In der letzten Woche";
      case delta <= month:
        return "Im letzten Monat";
      case delta <= month * 2:
        return "Vor 2 Monaten";
      case delta <= month * 3:
        return "Vor 3 Monaten";
      case delta <= month * 6:
        return "Vor über 3 Monaten";
      case delta <= year:
        return "Vor über 6 Monaten";
      case delta <= year * 2:
        return "Vor über einem Jahr";
      case delta <= year * 3:
        return "Vor über zwei Jahren";
      default:
        return `${new Date(date).toLocaleDateString("de-DE")}`;
    }
  });

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "_site", // this is the default
    },
    passthroughFileCopy: true,
  };
};

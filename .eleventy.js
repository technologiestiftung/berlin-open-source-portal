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

  eleventyConfig.addFilter("relativeTime", (date) => {
    const delta = Math.round((new Date() - new Date(date)) / 1000);

    const minute = 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7,
      month = week * 4,
      year = month * 12;

    switch (true) {
      case delta <= day * 2:
        return "Gestern aktualisiert";
      case delta <= day * 3:
        return "Vorgestern aktualisiert";
      case delta <= week:
        return "In der letzten Woche aktualisiert";
      case delta <= month:
        return "Im letzten Monat aktualisiert";
      case delta <= month * 2:
        return "Vor 2 Monaten aktualisiert";
      case delta <= month * 3:
        return "Vor 3 Monaten aktualisiert";
      case delta <= month * 6:
        return "Vor über 3 Monaten aktualisiert";
      case delta <= year:
        return "Vor über 6 Monaten aktualisiert";
      case delta <= year * 2:
        return "Vor über einem Jahr aktualisiert";
      case delta <= year * 3:
        return "Vor über zwei Jahren aktualisiert";
      default:
        return `Aktualisiert: ${new Date(date).toLocaleDateString("de-DE")}`;
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

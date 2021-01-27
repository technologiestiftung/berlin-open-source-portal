module.exports = function (eleventyConfig) {
  // This allows Eleventy to watch for file changes during local development.
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/css/style.compiled.css");
  // Legacy CSS files following. TODO: Remove when refactor to Tailwind is complete.
  eleventyConfig.addPassthroughCopy("src/assets/css/fonts.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/github-markdown.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/syntax.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/style-old.css");
  // Legacy CSS end.
  eleventyConfig.addPassthroughCopy({ "src/assets/common": "." });

  eleventyConfig.addWatchTarget("./src/assets/css/*.css");

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "_site", // this is the default
    },
    passthroughFileCopy: true,
  };
};

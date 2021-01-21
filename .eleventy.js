module.exports = function (eleventyConfig) {
  // This allows Eleventy to watch for file changes during local development.
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addWatchTarget("./src/assets/css/style.compiled.css");

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "_site", // this is the default
    },
    passthroughFileCopy: true,
  };
};

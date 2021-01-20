module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "_site", // this is the default
    },
    passthroughFileCopy: true,
  };
};

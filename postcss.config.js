const config = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

if (process.env.NODE_ENV === "production") {
  config.plugins = [
    ...config.plugins,
    require("cssnano")({
      preset: "default",
    }),
  ];
}

module.exports = config;

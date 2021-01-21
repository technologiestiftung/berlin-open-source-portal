const config = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.cssnano = require("cssnano")({
    preset: "default",
  });
}

module.exports = config;

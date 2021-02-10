module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,liquid,njk}"],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
    colors: {
      blue: {
        50: "#e9ebf4",
        100: "#d2d7e9",
        200: "#a5afd3",
        300: "#7887bd",
        400: "#4b5fa7",
        500: "#1e3791",
      },
      red: {
        50: "#fde6eb",
        100: "#faccd6",
        200: "#f599ad",
        300: "#f06684",
        400: "#eb335b",
        500: "#e60032",
      },
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
      white: "#fff",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#18181b",
            a: {
              color: "#1e3791",
              textDecoration: "none",
              "&:hover": {
                color: "#e60032",
              },
            },
          },
        },
      },
      gridTemplateRows: {
        "stretch-last": "auto minmax(auto, 1fr)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

const color = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3182CE",
        secondary: "#B83280",
        background: "#FBFAF8",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

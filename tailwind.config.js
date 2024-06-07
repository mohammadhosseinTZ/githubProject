/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
    },
    extend: {
      colors: {
        bgmain: "#0D1117",
        bgSearch: "#283041",
        bgButtonHome: "rgb(117,63,198)",
      },
    },
  },
  plugins: [],
};

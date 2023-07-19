/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addBase }) {
      addBase({
        '[type="search"]::-webkit-search-decoration': { display: "none" },
        '[type="search"]::-webkit-search-cancel-button': { display: "none" },
        
      });
    }),
  ],
};

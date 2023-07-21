/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Rubik", "sans-serif"],
    },
//     screens: {
// 'sm': '640px',
// 'md': '768px',
// 'xl': '1280px',
// '2xl': '1536px',
//     },
    
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

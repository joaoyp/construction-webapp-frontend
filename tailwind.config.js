/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/resources/images/8.jpg')",
        hero2: "url('/src/resources/images/5.jpg')",
      },
      fontFamily: {
        alice: ['"Alice', "serif"],
      },
    },
  },
  plugins: [],
};

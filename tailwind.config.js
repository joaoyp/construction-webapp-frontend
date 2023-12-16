/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        estimate: "url('/src/resources/images_pa/20230216_153818.jpg')",
        hero: "url('/src/resources/images_pa/hero.jpg')",
      },
      fontFamily: {
        alice: ['"Alice', "serif"],
      },
    },
  },
  plugins: [],
};

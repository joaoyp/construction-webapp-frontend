/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerAbout: "url('/src/resources/images_pa/20230707_103612.jpg')",
        estimate: "url('/src/resources/images_pa/20230216_153818.jpg')",
        hero: "url('/src/resources/images_pa/20230707_103600.jpg')",
      },
      fontFamily: {
        alice: ['"Alice', "serif"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gotham: ["GothamPro"],
    },
    backgroundImage: {
      tractor: "url('../public/assets/images/footer-tractor.png')",
    },

    extend: {
      colors: {
        primary: "#a9263f",
        secondary: "#353845",
        accent: "#c49a77",
      },
      screens: {
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};

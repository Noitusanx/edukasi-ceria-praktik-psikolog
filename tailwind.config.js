// tailwind.config.js
const path = require("path");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#F2EADD",
        lightblue: "#C6F1FF",
        darkgreen: "#C8E6C9",
        pink: "#FFA2C9",
        orange: "#FFCF88",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      boxShadow: {
        custom: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "hero-pattern": `url(${path.resolve(
          __dirname,
          "src/images/background_event.webp"
        )})`,
      },
    },
  },
  plugins: [],
};

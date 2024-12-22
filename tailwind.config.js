/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*/*.html", "./*/*/*.html", "./*/*/*/*.html", "./*/*/*/*/*.html"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      "2xl": { max: "1600px" },
      xl: { max: "1440px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "380px" },
    },
    extend: {
      colors: {
        primaryGradient: "",
        primaryPink: "#FF00BF",
        primaryBlack: "#20110B",
        primaryLightBrown: "#C1B39D",
        primaryGreen: "#4EF30D",
        secondaryGradient: "",
        secondaryGradientHalf: "",
        secondaryGrey: "#584F5D",
        secondaryWheat: "#E4D7CF",
        secondaryRed: "#FF2D55",
      },
    },
  },
};

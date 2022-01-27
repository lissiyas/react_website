module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      nav: "#ccffcc",
      ins: "#4f6f57",
      white: "#ffffff",
      black: "#000000",
      grey: "#E5E8E8",
      orange: "#FFC05A",
      gray: "#333333",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

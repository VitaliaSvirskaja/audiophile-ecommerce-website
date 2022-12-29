/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sepia: "#D87D4A",
        fuchsia: "#fbaf85",
        "almost-black": "#191919",
        "middle-grey": "#F1F1F1",
        "very-light-grey": "#FAFAFA",
        "error-red": "#CD2C2C",
      },
    },
  },
  plugins: [],
};

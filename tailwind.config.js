/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {
    gridTemplateColumns: {
      // Not necessary if you're not using gaps
      "no-gap": "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      // Not necessary if you're not using gaps
      "no-gap": "repeat(12, minmax(0, 1fr))",
    },
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#E7E7EF",
          200: "#CACAD9",
          300: "#ACACC0",
          400: "#9191A8",
          500: "#787891",
          600: "#63637B",
          700: "#515167",
          800: "#414155",
          900: "#333344",
          1000: "#292936",
        },
      },
    },
  },
};

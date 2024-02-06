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
};

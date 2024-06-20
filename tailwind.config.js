/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        "inherit": "inherit"
      },
      colors: {
        "primary": "#0E957C",
        "dark": "#212121"
      }
    },
  },
  plugins: [],
}


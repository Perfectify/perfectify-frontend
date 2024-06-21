/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["Nunito", "sans-serif"],
      },
      spacing: {
        "inherit": "inherit"
      },
      colors: {
        "primary": "#0E957C",
        "primary-opaque": "#0E957C99",
        "dark-background": "#212121",
        "white-background": "#fafffe"
      }
    },
  },
  plugins: [],
}

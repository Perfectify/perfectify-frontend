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
        "secondary": "#0B7763",
        "secondary-opaque": "#0B776399",
        "accent": "#FF6B6B",
        "accent-opaque": "#FF6B6B99",
        "dark-background": "#212121",
        "white-background": "#fafffe"
      }
    },
  },
  plugins: [],
}

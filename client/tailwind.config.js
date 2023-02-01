
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-scrollbar"),
    // ...
],
 variants: {
    scrollbar: ["dark"],
    // ...
  },
  // ...
}

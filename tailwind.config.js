/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...defaultColors,
      "transparent": 'transparent',
      "current": 'currentColor',
      "primary": '#27374D',
      'secondary': '#82A0BC',
      "white": '#FFFFFF',
      "light-gray": "#f3f4f6",
    },
    extend: {},
  },
  plugins: [],

}

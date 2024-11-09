/** @type {import('tailwindcss').Config} */
const gradients = require('tailwindcss-gradients');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'back':'#fef4f0',
      'navtext':'#73859f',
      'pink':'#f403fc',
      'orange':'#fc0335',
      'white':'#ffffff',
      'green':'#98b37a',
      'blue':'#193e6b',
      '#fcfcfe':'#fcfcfe'
    },
  plugins: [gradients],
}}
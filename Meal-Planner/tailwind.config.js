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
      '#fcfcfe':'#fcfcfe',
      '#e8d7d1':'#e8d7d1',
      '#f26ca6':'#a9b7a3',
      '#4d5d52':'#333333',
      '#ff0000':'#008000',
      "#7f32a8":'#7f32a8',
      '#4debe5':'#4debe5',
      '#dbebd3':'#dbebd3',
      '#e4f4c3':'#e4f4c3'
    },
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
    },
  plugins: [gradients],
}}
/** @type {import('tailwindcss').Config} */
const gradients = require('tailwindcss-gradients');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        gra: "bg-gradient-to-r from-[#69C28F] to-[#43A36F]",
        back: "#ffffff",
        navtext: "#73859f",
        pink: "#f403fc",
        orange: "#fc0335",
        white: "#ffffff",
        green: "#01986e",
        blue: "#193e6b",

        // renamed invalid keys
        fcfcfe: "#fcfcfe",
        e8d7d1: "#e8d7d1",
        f26ca6: "#a9b7a3",
        color4d5d52: "#333333",
        ff0000: "#008000",
        color7f32a8: "#7f32a8",
        color4debe5: "#4debe5",
        dbebd3: "#dbebd3",
        e4f4c3: "#e4f4c3",
        lgreen: "#e1f1f0",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [gradients],
};

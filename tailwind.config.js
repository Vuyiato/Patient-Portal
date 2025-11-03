/** @type {import('tailwindcss').Config} */
export default {
  // This is the most important part.
  // It tells Tailwind to scan your HTML file and all .tsx files
  // in the src folder for any class names you've used.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // This adds your custom brand colors
  theme: {
    extend: {
      colors: {
        "brand-teal": "#4E747B", // Your Teal
        "brand-yellow": "#F4E48E", // Your Yellow
        "brand-light": "#F9F7F0", // A light cream/beige for backgrounds
        "brand-dark": "#3A565B", // A darker teal for text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  // This plugin adds better default form styles
  plugins: [require("@tailwindcss/forms")],
};

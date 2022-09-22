/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lightgray: "#D6E2F0",
        grayblue: "#7B879D",
        darkblue: "#1F3251" 
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
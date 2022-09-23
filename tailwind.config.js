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
        transparentwhite: "rgba(255, 255, 255, 0.75)",
        lightgray: "#D6E2F0",
        grayblue: "#7B879D",
        darkblue: "#1F3251" ,
        brightorange: "#e38826",
        darkcyan: "#006970",
        verydarkcyan: "#004241",
        verylightgray: "#f2f2f2",
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'big-shoulders': ['Big Shoulders Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}
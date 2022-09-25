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

        "soft-violet": "hsl(273, 75%, 66%)",
      
        "soft-red": "hsl(14, 88%, 65%)",

        "very-dark-desat-blue": "hsl(238, 29%, 16%)",
        "very-dark-gray-blue": "hsl(237, 12%, 33%)",
        "dark-gray-blue": "hsl(240, 6%, 50%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "light-gray-blue": "hsl(240, 5%, 91%)"
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'big-shoulders': ['Big Shoulders Display', 'sans-serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
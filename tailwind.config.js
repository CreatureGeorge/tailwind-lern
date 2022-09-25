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
        "orange": "hsl(25, 97%, 53%)",
        "soft-orange": "hsl(25, 97%, 65%)",

        "light-gray-blue": "hsl(240, 5%, 91%)",
        "dark-gray-blue": "hsl(240, 6%, 50%)",  
        "very-dark-gray-blue": "hsl(237, 12%, 33%)",
        "very-dark-desat-blue": "hsl(238, 29%, 16%)",


        "soft-blue": "hsl(240, 73%, 65%)",

        "soft-dark-blue": "hsl(213, 20%, 22%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",

        "light-gray": "hsl(217, 12%, 63%)",
        "med-gray": "hsl(216, 12%, 54%)",


      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'big-shoulders': ['Big Shoulders Display', 'sans-serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        'overpass': ['Overpass']
      }
    },
  },
  plugins: [],
}
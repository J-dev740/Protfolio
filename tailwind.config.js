/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gae:['Gaegu','sans-serif'],
        solway:['Solway','serif']
      }
    },
  },
  plugins: [],
}


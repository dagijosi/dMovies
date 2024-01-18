/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'darkblue':'#16181E',
        'middleblue': '#21242D',
        'darkgray':'#00000033',
        'lightgreen':'#00B9AE'
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        display:['Cinzel'],
        body:['Poppins']
      },
      colors: {
        'lblue': '#E9F1FA',
        'bblue': '#00ABE4',
        'white': '#FFFFFF',

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}


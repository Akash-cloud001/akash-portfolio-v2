/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      height:{
        '3px': '3px'
      },
      colors:{
        'logo-color':'#6919FF'
      },
      inset:{
        '1/8':'12.5%'
      }
    },
  },
  plugins: [],
}


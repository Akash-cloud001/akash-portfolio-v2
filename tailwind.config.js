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
      }
    },
  },
  plugins: [],
}


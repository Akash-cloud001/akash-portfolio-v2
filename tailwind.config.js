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
        'logo-color':'#6919FF',
        'orange-color': '#ff651c'
      },
      inset:{
        '1/5':'20%',
        '1/8':'12.5%',
        '15/2':'7.5%'
      },

    },
  },
  plugins: [],
}


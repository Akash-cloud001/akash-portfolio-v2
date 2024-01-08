/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      height:{
        '3px': '3px',
        '200vh':'200vh',
        'custom': 'calc(100vh - 64px)'
      },
      minHeight:{
        'custom':'calc(100vh - 64px)'
      },
      colors:{
        'logo-color':'#6919FF',
        'orange-color': '#ff651c',
        'dark-color':'#0f0f0f'
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


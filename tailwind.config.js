/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./build/static/css/**"
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'sans-serif']
    },
    extend: {

      colors: {
        'dark-gray' : '#121212',
      },
    },
  },
  plugins: [],
}


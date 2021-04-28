const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    '../views/**/*.ejs'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: colors.coolGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

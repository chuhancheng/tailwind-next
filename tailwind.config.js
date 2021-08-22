module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => ({
      ...theme('colors'),
      'nav-blue': '#1b79a2'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'nav-gray': '#777',
      'ligh-blue': '#60d2e675',
      'nav-blue': '#1b79a2'
    }),
    extend: {
      width: {
        '250': '250px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

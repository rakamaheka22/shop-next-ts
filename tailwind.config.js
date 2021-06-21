module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': '#ef4c29',
        'secondary': '#214a88',
        'accent': '#ffff00',
        'dark-primary': '#ee4d2d',
        'grey': '#C6D0D8',
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#ef4c29',
      'primary-100': '#f8e5e1',
      'secondary': '#214a88',
      'accent': '#ffff00',
      'dark-primary': '#ee4d2d',
      'light-200': '#F7F7F9',
      'light-100': '#FCFCFC',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
        muted: '#888888'
      },
      black: {
        DEFAULT: '#000000',
        muted: '#3F3F3F'
      }
    },
    fontFamily: {
      'sans': ['Lexend Deca', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

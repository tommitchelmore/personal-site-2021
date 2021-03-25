module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
        muted: '#999999'
      },
      black: {
        DEFAULT: '#000000',
        muted: '#3F3F3F'
      },
      primary: {
        DEFAULT: '#08081D'
      },
      secondary: {
        DEFAULT: '#0066FF'
      },
      warning: {
        DEFAULT: '#EA2D2E'
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
  plugins: [
    require('@tailwindcss/typography')
  ],
}

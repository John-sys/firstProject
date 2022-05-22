module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'brown':'#e9c46a',
      'gray':'#8d99ae',
      'white':'#fff',
      'theme':'#f9dcc4',
      'purple':'#5C64Cf',
      'black':'#000',
    },
  },
  plugins: [],
}

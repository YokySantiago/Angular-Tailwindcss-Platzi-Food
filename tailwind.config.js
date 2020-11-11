module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#f3c614',
        secundary:  '#31393c',
        gold: '#928028',
        error: '#D36582',
        success: '#00A878',
        info: '#4D6CFA'
      },
      height: {
        80: '20rem',
        100: '25rem'
      },
      fontFamily: {
        oswald: [
          'Oswald', 
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      }
    },
  },
  variants: {},
  plugins: [],
}

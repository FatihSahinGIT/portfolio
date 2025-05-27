const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      'f-3xl': ['10px', { lineHeight: '3rem' }],
    },
  },
}
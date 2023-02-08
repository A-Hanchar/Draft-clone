/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      md: { max: '767px' },

      sm: { max: '450px' },
    },
  },
}

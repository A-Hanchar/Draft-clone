/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[DATA_THEME_MODE="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      md: { max: '767px' },
      sm: { max: '450px' },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide')],
}

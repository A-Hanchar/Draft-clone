module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-pxtorem': {},
    tailwindcss: {
      content: ['./index.html', './src/**/*.{ts,tsx}'],
    },
    autoprefixer: {},
  },
}

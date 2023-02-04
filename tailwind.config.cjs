/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /(bg|text)-(gray|red|green|blue)-(100|500|700|800)/,
    },
  ],
}

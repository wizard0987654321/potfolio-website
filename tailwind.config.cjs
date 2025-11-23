/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      // mobile-first ranges
      xs: { max: '479px' }, // < 480px
      sm: { min: '480px', max: '767px' }, // 480 - 767px
      md: { min: '768px' }, // 768px and up
    },
    extend: {},
  },
  plugins: [],
}

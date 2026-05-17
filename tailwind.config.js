/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './tool/**/*.html', './milne-staining-tool/**/*.html'],
  theme: {
    extend: {
      colors: {
        gunmetal: {
          900: '#1a1d23',
          800: '#22262e',
          700: '#2d323c',
          600: '#3d4455',
          500: '#4d566a',
        },
        brick: {
          900: '#5D2E0C',
          800: '#6B3410',
          700: '#7A3A12',
          600: '#8B4513',
          500: '#9C4D15',
          400: '#A0522D',
          200: '#D4936B',
        },
        accent: {
          600: '#B89220',
          500: '#C9A227',
          400: '#D4B23A',
          300: '#E8D48B',
        },
        warm: {
          50: '#faf9f7',
          100: '#f5f3f0',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'color-vortex-blue': '#3C4557',
        'color-moon': '#E0E5F1',
        'color-blue': '#4880FF',
        'color-biro-blue': '#313945',
        'color-gray': '#697185',
        'color-blas-blue': '#2D52A8',
        'color-white': 'white !important',
      },
    },
  },
  plugins: [],
}


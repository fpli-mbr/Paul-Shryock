module.exports = {
  plugins: [
    require('autoprefixer'),
    require('precss'),
    require('tailwindcss')('./tailwind.js'),
  ]
}
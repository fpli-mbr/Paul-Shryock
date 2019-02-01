module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('precss'),
    require('tailwindcss')('./tailwind.js'),
  ]
}
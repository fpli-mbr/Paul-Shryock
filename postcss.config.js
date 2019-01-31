module.exports = {
	plugins: [
	  require('precss'),
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer'),
	]

	// parser: 'sugarss',
	// plugins: {
	// 	'postcss-import': {},
	// 	'postcss-preset-env': {},
	// 	'cssnano': {}
	// }
}

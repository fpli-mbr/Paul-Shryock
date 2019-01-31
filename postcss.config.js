const tailwindcss = require('tailwindcss'),
			precss = require('precss'),
			autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
	  precss,
    autoprefixer,
    tailwindcss('./tailwind.js'),
	]
}

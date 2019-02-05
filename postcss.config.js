const autoprefixer = require('autoprefixer'),
			cssnano = require('cssnano'),
    	postcssPresetEnv = require('postcss-preset-env'),
    	precss = require('precss'),
    	tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    postcssPresetEnv,
    precss,
    tailwindcss('./tailwind.js'),
    autoprefixer,
    cssnano({
      preset: 'default',
    }),
  ]
}
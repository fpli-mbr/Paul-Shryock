const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	
	name: process.env.NODE_ENV == 'production' ? 'production' : 'development',
	mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

	entry: {

		// JS
		'js/app.js': './src/_assets/js/app.js',
		'js/development.js': './src/_assets/js/development.js',

		// SCSS
		// 'css/app.css': './src/_assets/scss/app.scss',
	},

	output: {
		path: __dirname + '/src',
		filename: '[name]',
	},

	module: {
		rules: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				include: __dirname + '/src/_assets/js'
			 },
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					// Add PostCSS later
					'sass-loader',
				],
				include: __dirname + '/src/_assets/scss'
			}
		],
	},

	plugins: [
		new MiniCssExtractPlugin(
			{
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: "./css/app.css",
				chunkFilename: "./css/[id].css"
			}
		)
	],

};
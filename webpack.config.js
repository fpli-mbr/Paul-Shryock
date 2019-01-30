const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	
	name: process.env.NODE_ENV == 'production' ? 'production' : 'development',
	mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

	entry: {
		'app': './src/_assets/js/app.js',
		'development': './src/_assets/js/development.js',
	},

	output: {
		path: __dirname + '/src',
		filename: './js/[name].js',
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
					// Add PostCSS
					'sass-loader',
				],
			}
		],
	},

	plugins: [
		new MiniCssExtractPlugin(
			{
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: "./css/[name].css",
				chunkFilename: "./css/[id].css"
			}
		)
	],

};
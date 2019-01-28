const config = {
	module: {},
};

const development = Object.assign({}, config, {
	name: 'development',
	mode: 'development',
	entry: {
		development: './src/_assets/js/development.js'
	},
	output: {
		filename: '[name].bundle.min.js',
		path: __dirname + '/src/js'
	},
});
const production = Object.assign({}, config, {
	name: 'production',
	mode: 'production',
	entry: {
		app: './src/_assets/js/app.js'
	},
	output: {
		filename: '[name].bundle.min.js',
		path: __dirname + '/src/js'
	},
});

// Return Array of Configurations
module.exports = [
	development,
	production,			 
];
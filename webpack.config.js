// Original

// module.exports = {

// 	mode: 'production',
//	 entry: './src/_assets/js/app.js',
//	 output: {
//		 filename: 'bundle.min.js',
//		 path: __dirname + '/src/js'
//	 }

// };

// This works

const config = {
	// TODO: Add common Configuration
	module: {},
};

const development = Object.assign({}, config, {
	name: 'development',
	mode: 'development',
	entry: './src/_assets/js/development.js',
	output: {
		filename: 'development.min.js',
		path: __dirname + '/src/js'
	},
});
const production = Object.assign({}, config,{
	name: 'production',
	mode: 'production',
	entry: './src/_assets/js/app.js',
	output: {
		filename: 'bundle.min.js',
		path: __dirname + '/src/js'
	},
});

// Return Array of Configurations
module.exports = [
	development,
	production,			 
];

// Or try this later

// entry: {
// 	'module/a/index': 'module/a/index.js',
// 	'module/b/index': 'module/b/index.js',
// },
// output: {
// 	path: path.resolve(__dirname, 'dist'),
// 	filename: '[name].js'
// }
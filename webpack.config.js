module.exports = {

	mode: 'production',
  entry: './src/_assets/js/app.js',
  output: {
    filename: 'bundle.min.js',
    path: __dirname + '/src/js'
  }

};
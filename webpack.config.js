var path = require('path');

module.exports = {
	entry: './public/js/app.js',
	output: {
		path: __dirname + '/public/js/bundles',
		filename: 'bundle.js',
		publicPath: './js/bundles/',
		chunkFilename: '[name].bundle.js',
		sourceMapFilename: '[file].js.map',
		sourcePrefix: ''
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: [ /node_modules/ ],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ 'es2015', 'react' ]
						}
					}
				]
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ],
		alias: {
			'director': path.resolve(__dirname, 'node_modules/director/build/director.js'),
			'src': path.resolve(__dirname, 'src'),
			'actions': path.resolve(__dirname, 'src/actions'),
			'common': path.resolve(__dirname, 'src/common'),
			'configuration': path.resolve(__dirname, 'src/configuration'),
			'constants': path.resolve(__dirname, 'src/constants'),
			'contribution': path.resolve(__dirname, 'src/contribution'),
			'mixins': path.resolve(__dirname, 'src/mixins'),
			'services': path.resolve(__dirname, 'src/services'),
			'stores': path.resolve(__dirname, 'src/stores'),
			'utils': path.resolve(__dirname, 'src/utils'),
			'views': path.resolve(__dirname, 'src/views')
		}
	},
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: JSON.stringify('production')
		// 	}
		// }),
		// new webpack.optimize.UglifyJsPlugin({ minimize: true })
	]
};


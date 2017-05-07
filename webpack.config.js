var path = require('path');

module.exports = {
	entry: './src/app-site/app.js',
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
			'platform': path.resolve(__dirname, 'src/platform'),
			'actions': path.resolve(__dirname, 'src/platform/actions'),
			'common': path.resolve(__dirname, 'src/common'),
			'configuration': path.resolve(__dirname, 'src/platform/configuration'),
			'constants': path.resolve(__dirname, 'src/platform/constants'),
			'contribution': path.resolve(__dirname, 'src/platform/contribution'),
			'mixins': path.resolve(__dirname, 'src/platform/mixins'),
			'services': path.resolve(__dirname, 'src/platform/services'),
			'stores': path.resolve(__dirname, 'src/platform/stores'),
			'utils': path.resolve(__dirname, 'src/platform/utils'),
			'views': path.resolve(__dirname, 'src/platform/views')
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


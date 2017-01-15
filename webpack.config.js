var webpack = require('webpack');

module.exports = {
	entry: './public/js/app.js',
	output: {
		path: __dirname + '/public/js',
		filename: 'main.js',
		exclude: /node_modules/,
		sourceMapFilename: 'main.js.map',
		sourcePrefix: ''
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ 'es2015', 'react' ]
				}
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: [ '', '.js', '.jsx' ],
		alias: {
			'src': './src',
			'actions': './src/actions',
			'common': './src/common',
			'configuration': './src/configuration',
			'constants': './src/constants',
			'contribution': './src/contribution',
			'mixins': './src/mixins',
			'routes': './src/routes',
			'services': './src/services',
			'stores': './src/stores',
			'utils': './src/utils',
			'views': './src/views'
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


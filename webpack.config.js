var path = require('path');
var site = 'app-site';

module.exports = {
	entry: './src/' + site + '/app.js',
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
						loader: 'babel-loader'
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
			'common': path.resolve(__dirname, 'src/common'),
			'utils': path.resolve(__dirname, 'src/utils')
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


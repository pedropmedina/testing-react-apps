const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: ['core-js/features/promise', './src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public', 'dist'),
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{ loader: 'babel-loader' }],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true } },
				],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	resolve: { extensions: ['*', '.js', '.jsx'] },
};

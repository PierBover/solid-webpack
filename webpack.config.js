const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'js/[hash].js'
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: false,
			template: './src/index.html',
			filename: 'index.html'
		})
	]
};

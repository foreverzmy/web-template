// @ts-check
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.ts",
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "main.js"
  },
  module: {
    rules: [{
      test: /\.(j|t)sx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
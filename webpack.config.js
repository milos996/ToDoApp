const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
template: './index.html',
filename: 'index.html',
inject: 'body'
})


module.exports = {
  entry: './js/client.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
            test: /\.sass$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader!sass-loader",
            }),
          }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true })
      ]
}

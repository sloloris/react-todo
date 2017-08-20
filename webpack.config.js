var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    bundle: __dirname + '/static/app.js'
  },
  output: {
    path: __dirname + '/static/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016', 'stage-0']
        }
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {test:/\.png$/, loader: 'url-loader?limit=100000'}
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    }), 
  ]
};
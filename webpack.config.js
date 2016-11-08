var webpack = require('webpack');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.js','.ts']
  },
  output: {
    path: './dist',
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
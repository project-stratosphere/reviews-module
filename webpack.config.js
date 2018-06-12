const path = require('path');
const webpack = require('webpack');

const bundlePath = path.resolve(__dirname, 'client/dist/');

module.exports = {
  entry: './client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: bundlePath,
    filename: 'reviewsBundle.js',
  }
};

const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const isDev = (process.env.NODE_ENV = 'development');

module.exports = {
  entry: {
    scripts: path.resolve(__dirname, '../src/js/index.js'),
  },

  devtool: isDev ? 'inline-source-map' : false,
  mode: process.env.NODE_ENV,
  module: {
    rules: loaders,
  },
  plugins,
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
  },
};

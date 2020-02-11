const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'styles.css',
  }),
  new VueLoaderPlugin(),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(require('./browser-sync'));
}

module.exports = plugins;

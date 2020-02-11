const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [require('postcss-nested')()];

module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins,
      },
    },
  ],
};

module.exports = {
  test: /\.(woff|woff2|eot|ttf|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'fonts',
      },
    },
  ],
};

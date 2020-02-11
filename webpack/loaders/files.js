module.exports = {
  test: /\.(png|jpe?g|gif|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'images',
      },
    },
  ],
};

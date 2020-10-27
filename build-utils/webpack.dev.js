const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    index: 'index.html',
    host: 'localhost',
    historyApiFallback: true,
    port,
    open: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const commonConfig = require('./common');

const localConfig = {
  mode: 'development',
  devServer: {
    open: true,
    port: 3000,
    liveReload: true,
    hot: true,
    http2: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html')
    })
  ]
};

module.exports = merge(commonConfig, localConfig);

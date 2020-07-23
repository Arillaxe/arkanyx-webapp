const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('config');

const { host, port, publicHost } = config.get('webpack');
const outputFolder = 'build';


module.exports = {
  entry: './public/index.js',
  output: {
    path: path.join(__dirname, outputFolder),
    filename: 'bundle.js',
    publicPath: '/', // ensures correct client side routing with webpack-dev-server
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, outputFolder),
    host,
    port,
    public: publicHost, // remote machine host that is accessible from internet
    allowedHosts: [
      publicHost,
    ],
    disableHostCheck: true, // ensures that webpack-dev-server works from remote machine
    historyApiFallback: true, // ensures correct client side routing with webpack-dev-server
  },
};

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, 'client', 'public');
const ENTRY_FILE = path.join(__dirname, 'client', 'src', 'index.jsx');

const browserConfig = {
  entry: ENTRY_FILE,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: [/\.jsx/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};

const serverConfig = {
  entry: './server/start.jsx',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

module.exports = [browserConfig, serverConfig];


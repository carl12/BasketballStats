const path = require('path');

const DIST_DIR = path.join(__dirname, 'client', 'public');
const ENTRY_FILE = path.join(__dirname, 'client', 'src', 'index.jsx');

module.exports = {
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
}

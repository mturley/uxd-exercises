// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
const appRoot = 'src';
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  appRoot, // the app root folder, needed by the other webpack configs
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    `${__dirname}/${appRoot}/index.jsx`,
  ],
  output: {
    path: `${__dirname}/public/js`,
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
  },
  devServer: {
    contentBase: `${__dirname}/public`,
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: `${__dirname}/public`,
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
  devtool: 'source-map',
};

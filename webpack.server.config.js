const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'build');
const devMode = false;

module.exports = {
  context: srcPath,
  entry: './server/index.jsx',
  output: {
    path: distPath,
    filename: 'server.js',
    publicPath: '/',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { plugins: ['dynamic-import-node'] }
      },

      // {
      //   test: /\.scss$/,
      //   use: [
      //     "node-style-loader", // creates style nodes from JS strings
      //     "css-loader", // translates CSS into CommonJS
      //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
      //   ]
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'node-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },


      {
        test: /\.css$/,
        loader: 'css-loader'
      },
    ],
  },
  externals: nodeExternals(),
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "assets/css/[name].css",
      chunkFilename: "assets/css/[id].css"
    })
  ]
};

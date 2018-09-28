const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'build');
const devMode = true;

module.exports = {
  mode: 'development',
  entry: {
    client: `${srcPath}/client/index.jsx`,
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: distPath,
    filename: 'assets/js/[name].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },

    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/shared/assets/favicon.ico',
        to: './assets/'
      },
      {
        from: './src/shared/assets/images',
        to: './assets/images/'
      },
    ]),
    new HtmlWebpackPlugin({
      template: './src/client/index.template.ejs',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactLoadablePlugin({
      filename: './build/react-loadable.json',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "assets/css/[name].css",
      chunkFilename: "assets/css/[id].css"
    }),
    //new BundleAnalyzerPlugin()
  ],

  optimization: {
    namedModules: true, // NamedModulesPlugin()
    splitChunks: { // CommonsChunkPlugin()
      name: 'vendor',
      minChunks: Infinity
    },
    //noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    //concatenateModules: true //ModuleConcatenationPlugin
  }

};

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

const devMode = process.env.NODE_ENV !== "production"

module.exports = (env) => {

  return {

    entry: ["@babel/polyfill", "./src/index.js"],

    //devtool: 'eval', //'cheap-module-source-map', //-source-map

    output: {
      path: __dirname + "/dist",
      filename: 'bundle.js',
      publicPath: '/',
    },

    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      host: '0.0.0.0',
      port: 80,
      https: false,
      /*port: 443,
      https: {
        key: fs.readFileSync('.cert/server.key'),
        cert: fs.readFileSync('.cert/server.crt'),
        ca: fs.readFileSync('.cert/rootCA.pem'),
      },
      //compress: true,
      */
      disableHostCheck: true,
      allowedHosts: [
        'msnascimento.dev',
        'localhost',
        '127.0.0.1',
      ],
      historyApiFallback: true,
      proxy: [{
        context: '/WebApi/**',
        target: `http://${env.docker ? 'api' : '0.0.0.0'}:8080`,
        secure: false,
      }],

      watchOptions: {
        ignored: '**/node_modules',
        aggregateTimeout: 100,
        poll: 1000,
      },

    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        "React": "react",
      }),
      new LiveReloadPlugin({
        appendScriptTag: true,
        useSourceHash: false,
        hostname: 'localhost',
        protocol: 'http',
      }),
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.scss', '.webpack.js', '.web.js'],
      alias: {
        '@': __dirname,
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "react-hot-loader/webpack"],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(jpg|png|svg|gif|ico)(\?v=[0-9].[0-9].[0-9])?$/,
          use: 'file-loader?name=images/[name].[ext]',
        },
      ]
    },
  };
};

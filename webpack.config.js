var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  return {
    entry: ["@babel/polyfill", "./src/index.js"],

    watchOptions: {
      aggregateTimeout: 100,
      poll: 100,
    },

    output: {
      path: __dirname + "/dist",
      filename: 'index_bundle.js',
      publicPath: '/',
    },

    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      port: 80,
      host: '0.0.0.0',
      compress: true,
      historyApiFallback: true,
      proxy: [{
        context: '/WebApi/**',
        target: `http://${env.docker ? 'api' : '0.0.0.0'}:8080`,
        secure: false,
      }],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new webpack.ProvidePlugin({
        "React": "react",
     }),
      new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        },
        {
          test: /\.(js|jsx|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader","react-hot-loader/webpack"],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(jpg|png|svg|gif|ico)(\?v=[0-9].[0-9].[0-9])?$/,
          use: 'file-loader?name=images/[name].[ext]',
        },
      ]
    },
  };
};
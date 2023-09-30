const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: false,
    open: true,
    port: 8000,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.css$/i,
        exclude: /bootstrap\.min\.css$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            "css-loader"
          ],
      },
      {
        test:/bootstrap\.min\.css$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            "rtlcss-loader"
          ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },
      {
        test: /\.(svg|eot|woff|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
    },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact2.html",
      template: "./src/contact2.html",
    }),
    new HtmlWebpackPlugin({
      filename: "tour_1.html",
      template: "./src/tour_1.html",
    }),
    new HtmlWebpackPlugin({
      filename: "tour_2.html",
      template: "./src/tour_2.html",
    }),
    new MiniCssExtractPlugin({
        filename: "css/style.css",
      }),
    new MiniCssExtractPlugin()
],
};
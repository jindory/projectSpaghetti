const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
  devServer: {
    static: './docs',
  },
  output: {
    path: path.resolve(__dirname, 'docs'), // './dist'의 절대 경로를 리턴합니다.
    filename: 'app.bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(wav|mp3)$/,
        type: "asset/resource",
        generator: {
          filename: "sounds/[name][ext]",
        },
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })]
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: './dist',
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
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })]
};
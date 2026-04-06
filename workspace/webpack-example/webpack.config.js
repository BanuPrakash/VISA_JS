const path = require('path'); // node module
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash:8].js',
  },
  target: ['web', 'es5'],
  module: {
    "rules": [{
      test : /\.js$/,
      use: ['babel-loader']
    },
    {
      test : /\.ts$/,
      use : ['ts-loader']
    },
    {
    test : /\.css$/,
    use : ['style-loader', 'css-loader']
    }
  ]
  },
   devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname + "/src" + "/index.html")
  })],
}
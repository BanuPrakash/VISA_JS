const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = function () {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js"
        },
        module: {
            rules: [
                {
                    test: /\.js(x)?$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.ts(x)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {
            extensions: [
                '.tsx', 
                '.ts',
                '.jsx',
                '.js'
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        })],
    }
}

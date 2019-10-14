const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');

module.exports = merge(base, {
    entry: {
        client: path.resolve(__dirname, "../src", "entry-client.ts")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            filename: 'index.html',
            publicPath: '/dist/'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
        open: true,
        hot: true,
        historyApiFallback: {
            index: "index.html"
        }
    }
});

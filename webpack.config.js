const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'main.ts'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/, options: {appendTsSuffixTo: [/\.vue$/]}},
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            {test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: {name: '[name].[ext]?[hash]'}}
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: 'index.html',
        })
    ],
    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.vue', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
        open: true,
        hot: true,
        historyApiFallback: {
            index: "index.html"
        }
    }
};

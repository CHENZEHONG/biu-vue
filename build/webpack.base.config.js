const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    // build: {
    //     index: path.resolve(__dirname, '../dist/index.html'),
    //     assetsRoot: path.resolve(__dirname, '../dist'),
    //     assetsSubDirectory: 'static',
    //     assetsPublicPath: '/'
    // },
    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.vue', '.json']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../dist'),
        publicPath: "./"
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/, options: {appendTsSuffixTo: [/\.vue$/]}},
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            {test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: {name: '[name].[ext]?[hash]'}},
            {test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, loader: 'url-loader'}
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*']
            }
        ])
    ]
};

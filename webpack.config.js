const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
import webpack, { HotModuleReplacementPlugin } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default () => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.(jpg)$/, loader: 'file-loader?name=[name].[ext]&outputPath=assets/' }
        ]
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: './dist',
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/config.json' }
        ])
    ]
})

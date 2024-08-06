const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer:  {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
        new ESLintPlugin({})
    ],
    output: {
        filename: 'main.js',
    }
}
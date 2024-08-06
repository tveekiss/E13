import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint";

export default {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new ESLintPlugin({})
    ],
    output: {
        filename: 'main.js',
    }
}
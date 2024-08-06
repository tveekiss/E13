import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint";

export default {
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
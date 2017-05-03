const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: [
        "react-hot-loader/patch",        
        "./src/index.tsx"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: "eval-source-map",
    resolve: {
        extensions: ['.scss', '.css', '.ts', ".tsx", ".js", '.json']
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.ejs',
            filename: 'index.html',
            hash: true,
            minify: {
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                    {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: "[name]--[local]--[hash:base64:8]"
                            }
                        },
                        'sass-loader',
                        "postcss-loader" // has separate config, see postcss.config.js nearby
                    ]
                })
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    devServer: {
        hot: true
    }
};
const PATH = require("path");
const WEBPACK = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const CONFIG_WEBPACK = {
    entry: PATH.resolve(__dirname, "../App/Main.js"),
    output: {
        path: PATH.resolve(__dirname, "../App/public/js"),
        filename: "main.js",
        publicPath: "/public/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "flow"],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                }),
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 500000,
                    },
                },
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("../css/master.css"),
    ],
};

module.exports = CONFIG_WEBPACK;

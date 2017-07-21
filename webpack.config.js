var webpack = require("webpack");
var path = require("path");
var babelOptions = {
    presets: ["es2015", "react"],
    plugins: ["transform-runtime"],
};

module.exports = {
    entry: {
        "out.js": "./src/in.tsx",
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]",
        libraryTarget: "umd",
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions,
                    },
                    {
                        loader: "ts-loader",
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelOptions,
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "source-map-loader"
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    }
};
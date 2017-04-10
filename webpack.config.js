const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'scripts/index.bundle.js'
    },
    devServer: {
        hot: true,
        contentBase: BUILD_DIR
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }

};

module.exports = config;

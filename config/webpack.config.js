const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            loaders.CSSLoader,
            loaders.JSLoader,
            loaders.ESLintLoader,
            loaders.ImageLoader
        ]
    },
    plugins: [
        plugins.ExtractTextPlugin,
        plugins.StyleLintPlugin
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist/')
    }
};
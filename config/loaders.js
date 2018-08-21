const plugins = require('./plugins');

// JS Loader
const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['env']
        }
    }
};

// ESLint
const ESLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
        loader: 'eslint-loader',
        options: {
            configFile: __dirname + '/.eslintrc'
        }
    }
};

// CSS
const CSSLoader = {
    test: /\.css$/,
    use: plugins.ExtractTextPlugin.extract({
        use: [
            {
                loader: 'css-loader',
                options: { importLoaders: 1 }
            },
            {
                loader: 'postcss-loader',
                options: {
                    config: {
                        path: __dirname + '/postcss.config.js'
                    }
                }
            }
        ]
    })
};

// Image loader
const ImageLoader = {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g/, /\.png$/],
    loader: require.resolve('url-loader'),
    options: {
        name: "[name].[hash].[ext]"
    }
}

module.exports = {
    ESLintLoader: ESLintLoader,
    JSLoader: JSLoader,
    CSSLoader: CSSLoader,
    ImageLoader: ImageLoader,
}
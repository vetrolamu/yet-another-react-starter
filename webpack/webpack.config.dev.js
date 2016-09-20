const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname, '..', 'app', 'client.js')
    ],
    output: {
        path: path.resolve(__dirname, '..', 'app'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                WEBPACK: true
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel',
                include: path.resolve(__dirname, '..', 'app'),
                query: {
                    presets: ['react-hmre']
                }
            },
            {
                test: /\.js$|\.jsx$/,
                loader: 'eslint-loader',
                exclude: [/node_modules/, /build/]
            },

            {
                test: /\.scss/,
                loader: 'style!css!sass!postcss',
                include: path.resolve(__dirname, '..', 'app')
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    postcss() {
        return [autoprefixer];
    }
};

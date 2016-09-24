const autoprefixer = require('autoprefixer');

module.exports = {
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    postcss() {
        return [autoprefixer];
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url',
                query: {
                    name: 'assets/[hash].[ext]',
                    limit: 20000
                }
            }
        ]
    }
};

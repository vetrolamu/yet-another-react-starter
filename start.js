const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
require('babel-core/register');
require('babel-polyfill');

['.css', '.scss', '.ttf', '.woff', '.woff2'].forEach(ext => require.extensions[ext] = () => {});

if (process.env.NODE_ENV === 'development') {
    ['.png', '.jpg', '.jpeg', '.gif', '.svg'].forEach(ext => require.extensions[ext] = () => '');
    require('./server/index.js')
}

if (process.env.NODE_ENV === 'production') {
    global.webpack_isomorphic_tools = new WebpackIsomorphicTools(require('./webpack/webpack-isomorphic-config'))
        .server('./', function() {
            require('./server/index.js')
        });
}


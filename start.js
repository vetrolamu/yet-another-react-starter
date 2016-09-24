require('babel-core/register');
['.css', '.scss', '.ttf', '.woff', '.woff2', '.png', '.jpg', '.gif', '.svg']
    .forEach(ext => require.extensions[ext] = () => {});
require('babel-polyfill');
require('./server/index.js');

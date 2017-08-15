var path = require('path'); //core node js package to "resolve" path. Supports output:{path:...

/**
 * __dirname: current directory
 * path: used by webpack prod to locate the output directory
 * publicPath: used by webpack-dev-server to locate the output directory
 *
 * Note: webpack-dev-server doesn't output file. It just servers a temporary file from memory.
 */
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    }
};
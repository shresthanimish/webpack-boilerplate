var path = require('path'); //core node js package to "resolve" path. Supports output:{path:...

/**
 * This file is automatically identified as webpack config file as long as you name it as "webpack.config.js"
 *
 * __dirname: current directory
 * path: used by webpack prod to locate the output directory
 * publicPath: used by webpack-dev-server to locate the output directory
 *
 * module:
 *      rules:  (-js doesn't require rule, as it is supported out of the box.)
 *              {
 *                  test: creates a rule for 1 or many file extensions. eg: css
 *                  loader: plugs a loader module to handle that file.
*               }
 *
 *
 * Note: webpack-dev-server doesn't output file. It just servers a temporary file from memory.
 */
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
};
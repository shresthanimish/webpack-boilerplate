var path = require('path'); //core node js package to "resolve" path. Supports output:{path:...
var webpack = require('webpack'); //adding reference to webpack in node_modules

/**
 * This file is automatically identified as webpack config file as long as you name it as "webpack.config.js"
 *
 * entry: the first file webpack looks into. The initializer.
 * output: path to output file
 *      __dirname: current directory
 *      path: used by webpack prod to locate the output directory
 *      publicPath: used by webpack-dev-server to locate the output directory
 *
 * module:
 *      rules:  (-js doesn't require rule, as it is supported out of the box.)
 *              {
 *                  test: creates a rule for 1 or many file extensions. eg: css
 *                  loader: plugs a loader module to handle that file. Use this if you want to use single loader
 *                  use: use multiple loader. Please note that webpack loads in reverse order. So css-loader should be at the bottom of the list.
 *              }
 *
 * plugins: plugin different modules from here
 *          eg: webpack's optimize.UglifyJsPlugin minifies the bundle.
 *          This will minify dev-server bundle as well.
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
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            /**
             * add options here as per requirement
             *  You can leave it empty for default minification.
             */
        })
    ]
};

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {

    // Environment mode
    mode: 'development',

    // Entry point of app
    entry: resolveAppPath('demo/src'),

    output: {

        // Development filename output
        filename: 'demo/static/js/bundle.js',
    },

    devServer: {

        // Serve index.html as the base
        //contentBase: resolveAppPath('demo/public'),

        // Enable compression
        compress: true,

        // Enable hot reloading
        hot: true,

        host,

        port: 3000,

        // Public path is root of content base
        //publicPath: 'demo/public',

    },
    plugins: [
        // Re-generate index.html with injected script tag.
        // The injected script tag contains a src value of the
        // filename output defined above.
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveAppPath('demo/public/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
        alias: {
            "mylib": path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                include: [resolveAppPath('demo/src'), resolveAppPath('src')],
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ]
                }
            }
        ]
    }
}
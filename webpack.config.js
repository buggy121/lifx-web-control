/**
 * Created by Dawid Kulpa on 14.02.2017.
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
    {
        entry: {
            client: ['./src/client/client.js'],
        },
        output: {
            path: './dist/client',
            filename: '[name].js'
        },
        module: {
            loaders: [
                /*{
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                 presets: ['es2015']
                 }
                 },*/
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loaders: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader!sass-loader'
                    })
                },
                {
                    test: /\.css$/,
                    //exclude: /node_modules/,
                    loaders: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: './css/style.css',
                allChunks: true
            })
        ]
    },
    {
        target: 'node',
        entry: ['babel-polyfill', './src/server/server.js'],
        output: {
            library: 'srv',
            libraryTarget: 'commonjs2',
            path: './dist/server',
            filename: 'server.js'
        },
        externals: nodeModules,
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-2']
                    }
                },
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                },
                {
                 test: /\.scss$/,
                 exclude: /node_modules/,
                 loaders: ['style-loader', 'css-loader', 'sass-loader'],
                 }
            ]
        }
    }
];
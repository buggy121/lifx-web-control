/**
 * Created by Dawid Kulpa on 14.02.2017.
 */

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
        entry: './src/client/client.js',
        output: {
            path: './dist/client',
            filename: 'client.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        }
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
                }
            ]
        }
    }
];
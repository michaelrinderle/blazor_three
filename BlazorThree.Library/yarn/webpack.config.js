﻿const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/BlazorThree.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'BlazorThree.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
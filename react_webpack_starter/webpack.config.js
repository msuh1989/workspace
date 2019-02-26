const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        )
    ]
}

// npm i --save-dev webpack webpack-dev-server webpack-cli

// npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react

// npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin : version issue.
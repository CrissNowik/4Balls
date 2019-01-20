const path = require("path");

module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./out.js"
        },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
                }
        }]
    }
}
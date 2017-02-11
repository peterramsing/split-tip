module.exports = {
    entry: "./src/app.module.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    }
};

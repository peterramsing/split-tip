module.exports = {
    entry: "./src/app.module.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
        ]
    }
};

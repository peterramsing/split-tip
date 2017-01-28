module.exports = {
    entry: "./src/app.module.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: "#inline-source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = {
    entry: "./run.js",
    output: {
        path: "./release/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};
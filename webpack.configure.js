module.exports = {
    mode: 'development',
    // change to .tsx if necessary
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        // changed from extensions: [".js", ".jsx"]
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // addition - add source-map support
    devtool: "source-map"
}

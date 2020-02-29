module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', './src/assets/scripts/js/main.js'],
    output: {
        path: __dirname + '/src/assets/scripts',
		filename: 'muow.min.js',
		library: 'Muow'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};
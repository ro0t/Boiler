const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const colors = require('colors/safe');
const log = (title, data) => console.log(title, data);

module.exports = env => {

    log(colors.rainbow('Environment'), colors.bold(colors.white(">> " + env)));

    let extractPlugin = new ExtractTextPlugin({
        filename: '../css/style.css'
    });

    let cleanConfig = {
        paths: ['cache', 'public'],
        options: {
            root: __dirname,
            verbose: (env === 'dev'),
            watch: false,
            allowExternal: false
        }
    };

    var config = {
        mode: (env === 'dev') ? 'development' : 'production',
        entry: ['./app/bootstrap.js', './app/style/swag.scss'],
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'public/js')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, './node_modules'),
                    loader: 'babel-loader',
                    options: { presets: ['env'] },
                },
                {
                    test: /\.scss$/,
                    use: extractPlugin.extract({
                        use: [
                            { loader: 'css-loader', options: { minimize: (env === 'dev') } },
                            { loader: 'sass-loader' }
                        ]
                    })
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(cleanConfig.paths, cleanConfig.options),
            extractPlugin
        ]
    };

    return config;

};

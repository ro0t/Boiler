const path = require('path');
const settings = require('./config/settings.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require('./plugins/handlebars-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const colors = require('colors/safe');
const log = (title, data) => console.log(title, data);

module.exports = env => {

    log(colors.rainbow('Environment'), colors.bold(colors.white(">> " + env)));

    let cleanConfig = {
        paths: ['public'],
        options: {
            root: __dirname,
            verbose: (env === 'dev'),
            watch: false,
            allowExternal: false
        }
    };

    var config = {
        mode: 'development',
        entry: ['./app/bootstrap.js', './app/style/swag.scss'],
        devServer: {
            host: settings.devServer.host,
            port: settings.devServer.port,
            filename: 'app.js',
            open: true,
            historyApiFallback: {
                rewrites: [
                    { from: /^\/$/, to: '/index.html' },
                    { from: /app.js/, to: '/app.js' }
                ]
            }
        },
        output: {
            filename: settings.output.jsFileName,
            path: path.resolve(__dirname, 'public/js')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, './node_modules'),
                    loader: 'babel-loader',
                    options: { presets: ['env'] }
                },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" },
                        { loader: "sass-loader" }
                    ]
                }
            ]
        },
        resolve: {
            alias: {
              'vue$': 'vue/dist/vue.esm.js'
            }
        },
        plugins: [
            new CleanWebpackPlugin(cleanConfig.paths, cleanConfig.options),
            new HtmlWebpackPlugin({
                title: settings.title
            })
        ]
    };

    return config;

};

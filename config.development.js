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
            port: settings.devServer.port
        },
        output: {
            filename: settings.output.jsFileName,
            path: path.resolve(__dirname, 'public/js')
        },
        module: {
            rules: [
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
        plugins: [
            new CleanWebpackPlugin(cleanConfig.paths, cleanConfig.options),
            new HtmlWebpackPlugin({
                title: settings.title
            })
            //new HandlebarsPlugin({
            //     entry: path.join(process.cwd(), "app", "templates", "*.hbs"),
            //     output: path.join(process.cwd(), "public", "[name].html"),
            //     // data passed to main hbs template: `main-template(data)`
            //     data: settings,
            //     // globbed path to partials, where folder/filename is unique
            //     partials: [
            //         path.join(process.cwd(), "app", "templates", "components", "*", "*.hbs")
            //     ],
            //     onBeforeSetup: function (Handlebars) {},
            //     onBeforeAddPartials: function (Handlebars, partialsMap) {},
            //     onBeforeCompile: function (Handlebars, templateContent) {},
            //     onBeforeRender: function (Handlebars, data) {},
            //     onBeforeSave: function (Handlebars, resultHtml, filename) {},
            //     onDone: function (Handlebars, filename) {
            //         log(colors.rainbow('Handlebars'), colors.bold(colors.white(">> Built: " + filename)));
            //     }
            // })
        ]
    };

    return config;

};

const path = require('path');
const settings = require('./app/config/settings.json');
const HandlebarsPlugin = require('./plugins/handlebars-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const colors = require('colors/safe');
const log = (title, data) => console.log(title, data);

const extractPlugin = new ExtractTextPlugin({
    filename: '../css/' + settings.output.cssFileName
});

module.exports = env => {

    log(colors.rainbow('Environment'), colors.bold(colors.white(">> " + env)));

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
        devServer: {
            address: 'localhost',
            port: 8080,
            contentBase: path.resolve(__dirname, 'public')
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
                    options: { presets: ['env'] },
                },
                {
                    test: /\.scss$/,
                    use: extractPlugin.extract({
                        use: [
                            { loader: 'css-loader', options: { minimize: (env !== 'dev') } },
                            { loader: 'sass-loader' }
                        ]
                    })
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(cleanConfig.paths, cleanConfig.options),
            extractPlugin,
            new HandlebarsPlugin({
                entry: path.join(process.cwd(), "app", "templates", "*.hbs"),
                output: path.join(process.cwd(), "public", "[name].html"),
                // data passed to main hbs template: `main-template(data)`
                data: settings,
                // globbed path to partials, where folder/filename is unique
                partials: [
                    path.join(process.cwd(), "app", "templates", "components", "*", "*.hbs")
                ],
                onBeforeSetup: function (Handlebars) {},
                onBeforeAddPartials: function (Handlebars, partialsMap) {},
                onBeforeCompile: function (Handlebars, templateContent) {},
                onBeforeRender: function (Handlebars, data) {},
                onBeforeSave: function (Handlebars, resultHtml, filename) {},
                onDone: function (Handlebars, filename) {
                    log(colors.rainbow('Handlebars'), colors.bold(colors.white(">> Built: " + filename)));
                }
            })
        ]
    };

    return config;

};

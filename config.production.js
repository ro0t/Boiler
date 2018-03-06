const path = require('path');
const settings = require('./config/settings.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const colors = require('colors/safe');
const log = (title, data) => console.log(title, data);

const extractPlugin = new ExtractTextPlugin({
    filename: 'css/' + settings.output.cssFileName
});

module.exports = env => {

    log(colors.rainbow('Environment'), colors.bold(colors.white(">> " + env)));

    let cleanConfig = {
        paths: ['cache', 'public'],
        options: {
            root: __dirname,
            verbose: false,
            watch: false,
            allowExternal: false
        }
    };

    var config = {
        mode: 'production',
        entry: ['./app/bootstrap.js', './app/style/swag.scss'],
        output: {
            filename: settings.output.jsFileName,
            path: path.resolve(__dirname, 'public')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                          scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                        }
                    }
                },
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
                            { loader: 'css-loader', options: { minimize: true } },
                            { loader: 'sass-loader' }
                        ]
                    })
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(cleanConfig.paths, cleanConfig.options),
            extractPlugin,
            new HtmlWebpackPlugin({
                title: settings.title,
                googleAnalytics: settings.analyticsId,
                language: settings.language,
                outputFiles: {
                    js: settings.output.jsFileName,
                    css: settings.output.cssFileName
                },
                template: 'app/templates/index.html',
                filename: './index.html',
                inject: false,
                hash: true
            })
        ]
    };

    return config;

};

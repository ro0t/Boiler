const path = require('path');
const settings = require('./config/settings.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                    test: /\.(png|jpg|svg|gif)$/,
                    use: [{
                    loader: "file-loader",
                        options:  {
                            limit: 10000,
                            emitFile: true,
                            useRelativePath: true
                        }
                    }]
                },
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
                    options: { presets: ['env'] }
                },
                {
                  test: /\.scss$/,
                  use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                      loader: 'sass-resources-loader',
                      options: {
                        resources: [
                            './app/style/swag.scss'
                        ]
                      },
                    },
                  ],
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

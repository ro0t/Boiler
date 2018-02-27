module.exports = env => {

    console.log('Environment', env);

    return {
        entry: './app/bootstrap.js',
        output: {
            filename: 'boilertal-build.js',
            path: path.resolve(__dirname, 'public')
        }
    };

};

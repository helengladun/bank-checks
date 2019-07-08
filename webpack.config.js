module.exports = {
    entry: __dirname+'/app/index.ts',
    output: {
        path: __dirname+'/app',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
};
var path = require('path');
var webpack = require('webpack');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        bootstrap: [__dirname + '/src/main/webapp/bootstrap.ts', 'webpack-hot-middleware/client?reload=true'],
        thirdparty: ['jquery'],
        polyfill: ['zone.js/dist/zone', 'reflect-metadata'],
    },
    output: {
        path: path.join(__dirname, 'build', 'client'),
        filename: 'js/[name].js',
        chunkFilename: 'js/chunk-[id].js',
        publicPath: 'http://localhost:9001/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    '@angularclass/hmr-loader',
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                include: path.join(__dirname, 'src/main/')
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'images/[name].[ext]',
                    limit: 100
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.scss$/,
                exclude: [
                    path.join(__dirname, 'src/main/webapp/app')
                ],
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'src/main/webapp/app')
                ],
                use: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
            {
                test: /jquery/,
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new ProgressBarPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new DefinePlugin({
            'ENV': '"dev"'
        }),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/main/webapp/index.ejs'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: [
                'bootstrap',
                'thirdparty',
                'polyfill',
            ]
        }),
        new AddAssetHtmlPlugin([
            { filepath: require.resolve('./dll/angular.dll.js') }
        ]),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(path.join(__dirname, 'dll/angular-manifest.json'))
        })
    ],
    devtool: 'source-map' //'cheap-module-source-map' | 'source-map'
}
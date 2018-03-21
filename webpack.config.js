var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var uglify = new UglifyJsPlugin();
//var autoprefixer = new require('autoprefixer');
var extractLess = new ExtractTextPlugin({
    filename: "./style/[name].css",
    //disable: process.env.NODE_ENV === "development"
});
var extractCSS = new ExtractTextPlugin({
    filename: "./style/[name].css"
})
module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./src/js/app.js",
    mode: "development",
    watch: true,
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'node-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        //"style-loader",
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            /*config: {
                               // path: './postcss.config.js'
                            },*/
                            options: {
                                ident: 'postcss',
                                parser: 'sugarss',
                                exec: true,
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        //browsers: ['ie >= 8', 'last 4 version']
                                    })
                                ]
                            }
                        }

                    ]
                })
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            // minimize: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            //parser: 'sugarss',
                            config: {
                                path: './postcss.config.js',
                                ctx: {
                                    autoprefixer: { browsers: ['last 2 version'] }
                                }
                            },
                            ident: 'postcss'
                            /*
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ]*/
                        }
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractCSS,
        extractLess,
        uglify
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        inline: true,
        port: 10000
    }
}
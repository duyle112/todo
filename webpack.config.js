var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    entry: {
        app:'./src/index.js',
    },
    output:{
        filename: 'bundle.js',
        path:__dirname+'/public',
    },
    module:{
        loaders:[
            {test:/\.(js|jsx)$/, loader:'babel-loader', exclude: /node_modules/,
             query:
                {
                    presets: ['react']
                } 
            },
             { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
     plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
}

module.exports = config;

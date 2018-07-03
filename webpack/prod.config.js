const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig, {
    //devtool: 'eval-source-map',
  
    devServer: {
        inline: true,
        contentBase: 'src',
        port: '3001',
    },
  
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'FreightPacker.min.js'
    },

    /*plugins: [
        new UglifyJSPlugin()
    ]*/

});
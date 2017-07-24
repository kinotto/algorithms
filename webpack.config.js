var path = require('path');
var fs = require('fs');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: getFiles('./src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }/*,
    plugins: [
      new UglifyJSPlugin()
    ]*/
}

function getFiles(folder){
  return fs.readdirSync(folder)
    .map(function(fileName){
      return folder + '/' + fileName;
    })
    .filter(function(filename){
      return filename.substr(-3) === '.js'
    })
}

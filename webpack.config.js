var path = require('path')
var precss = require('precss')
var autoprefixer = require('autoprefixer')

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  dist: path.resolve(__dirname, 'dist')
}

module.exports = {
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },
  entry: PATHS.app,
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  }
}

var path = require('path')
var webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin('style.css', {
  allChunks: false
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(`css-loader?modules&importLoaders=2&localIdentName=[name]_[local]__[hash:base64:5]!sass-loader`)
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader?outputPath=app/dist/&outputPath=app/dist/',
            query: {
            }
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    extractSass
  ]
}
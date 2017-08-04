var webpack = require('webpack');

module.exports = {

  entry: [
    './app/index.js',
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: '/',
    filename: 'app.bundle.js'
  },

  devServer: {
    hot: true,
    filename: 'app.bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './dist',
    proxy: {
      "*": "http://localhost:3000"
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react']
        })],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader?modules&importLoaders=2&localIdentName=[name]_[local]__[hash:base64:5]" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
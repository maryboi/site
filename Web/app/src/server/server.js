import express from 'express'
import path from 'path'
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'

const app = express()
const port = 3000
const devPort = 3001


if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode')

  const config = require('../../webpack.dev.config')
  let compiler = webpack(config)
  let devServer = new WebpackDevServer(compiler, config.devServer)
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort)
  })
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.use('/', express.static(__dirname + '/../../dist'))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
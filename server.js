const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');

const compiler = webpack(config);
// const path = require('path')
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
// app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/dist/index.html')))
// serve th files on port 3000
app.listen(3000, () => {
  console.log('listening on prt');
});

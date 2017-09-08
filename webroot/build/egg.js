var config = require('../../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;
var compiler = webpack(webpackConfig);
const Middleware=require('koa-webpack-middleware');
var devMiddleware = Middleware.devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = Middleware.hotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})
var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})


function* setMiddleware(ctx, Middleware) {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset
  let stream = new require("stream").PassThrough();
  ctx.body = stream;
  ctx.res.write = stream.write.bind(stream),
    ctx.res.writeHead = (status, headers) => {
        ctx.status = status;
        ctx.set(headers);
      }
  yield  Middleware(ctx.req, ctx.res)
  // return new Promise((resolve, reject) => {
  //   // ctx.res.on('close', resolve)
  //   // ctx.res.on('finish', resolve)
  // })
}
module.exports = function* (app) {
  // handle fallback for HTML5 history API
  //app.use(function*(next){require('connect-history-api-fallback')()(this.req,this.res,next)});
  // serve webpack bundle output
  app.use(devMiddleware);
  // enable hot-reload and state-preserving
  // compilation error display
  app.use(hotMiddleware);
  // enable hot-reload and state-preserving
  devMiddleware.waitUntilValid(() => {
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      //opn("http://localhost:7001")
    }
    _resolve()
  })
  return app;
}

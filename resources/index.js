const config = require("./config");
var opn = require('opn')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./build/webpack.dev.conf')

// automatically open browser, if not set will be false
var autoOpenBrowser = false;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var compiler = webpack(webpackConfig);
const Middleware = require('koa-webpack-middleware');
var devMiddleware = Middleware.devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = Middleware.hotMiddleware(compiler, {
        log: false,
        heartbeat: 2000
    })
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
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

module.exports = function*(app) {
    // handle fallback for HTML5 history API
    //app.use(function*(next){yield require('connect-history-api-fallback')()(this.req,this.res,next)});
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
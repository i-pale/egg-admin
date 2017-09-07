'use strict';
var path = require('path');
var webpackconfig = require('./')
module.exports = appInfo => {
    const config = {
        middleware: [],
        keys: appInfo.name + '_1504144548125_2940',
        sequelize: require("./config.db"),
        view: {
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.html': 'nunjucks',
            },
        },
        static: {
            prefix: webpackconfig.dev.assetsPublicPath,
            dir: path.join(appInfo.baseDir, webpackconfig.dev.assetsSubDirectory),
            dynamic: true,
            preload: false,
            maxAge: 31536000,
            buffer: true,
        }
    };
    return config;
};
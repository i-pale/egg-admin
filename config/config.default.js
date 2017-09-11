'use strict';
var path = require('path');
module.exports = appInfo => {
    let config = {
        middleware: ['gzip', 'history', 'toLower'],
        keys: appInfo.name + '_1504144548125_2940',
        sequelize: require("./config.db"),
        view: {
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.html': 'nunjucks',
            },
        },
        static: {
            prefix: "/",
            dir: [path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'app/view')],
            dynamic: true,
            preload: false,
            maxAge: 31536000,
            buffer: true,
        },
    };
    return config;
};
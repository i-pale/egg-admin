'use strict';

module.exports = appInfo => {
  const config = {
    middleware:[],
    keys:appInfo.name + '_1504144548125_2940',
    sequelize:require("./config.db"),
  };
  return config;
};

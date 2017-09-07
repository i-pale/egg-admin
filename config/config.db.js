module.exports = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg_admin',
    host: '36.110.131.133',
    port: '3306',
    username: 'root',
    password: 'Jn597912',
    timezone: "+08:00",//当地时间
    define: {
        //paranoid: false,//软件删除
        timestamps: false,//添加删除/更新时间
        underscored: true, //驼峰命名
        //version:false,//添加版本
    }
}
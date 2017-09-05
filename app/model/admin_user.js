/* jshint indent: 2 */

module.exports = app => {
    const sequelize = app.Sequelize;
    const entity = {
        id: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: sequelize.STRING(20),
            allowNull: false,
        },
        password: {
            type: sequelize.STRING(50),
            allowNull: false,
        },
        status: {
            type: sequelize.INTEGER(1).UNSIGNED,
            allowNull: false,
        },
        create_time: {
            type: sequelize.STRING(50),
            allowNull: true,
        },
        last_login_time: {
            type: sequelize.STRING(50),
            allowNull: true,
        },
        last_login_ip: {
            type: sequelize.STRING(20),
            allowNull: true,
        },
    }
    const admin_user = app.model.define('admin_user', entity, {
        tableName: 'admin_user'
    });
    admin_user.associate = (models) => {
        admin_user.belongsToMany('auth_group', { //一对多  
            foreignKey: 'uid', //中间表的关联外键  
            through: 'auth_group_access' //中间表的model  
        })
    }
    admin_user.getModel = model => {
        if (typeof model !== "object") {
            throw new Error("请求参数错误");
            return false;
        }
        let newobj = {};
        for (var key in model) {
            if (entity.hasOwnProperty(key)) {
                newobj[key] = model[key];
            }
        }
        return newobj;
    }

    return admin_user;
};
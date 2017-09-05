/* jshint indent: 2 */

module.exports = app => {
    const sequelize = app.Sequelize;
    const entity = {
        id: {
            type: sequelize.INTEGER(8).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: sequelize.CHAR(100),
            allowNull: false,
        },
        status: {
            type: sequelize.INTEGER(1),
            allowNull: false,
        },
        rules: {
            type: sequelize.STRING(255),
            allowNull: false,
        }
    }
    const auth_group = app.model.define('auth_group', entity, {
        tableName: 'auth_group'
    });
    auth_group.associate = (models) => {
        auth_group.belongsToMany(models.AdminUser, { //一对多  
            foreignKey: 'group_id', //中间表的关联外键  
            through: 'auth_group_access' //中间表的model  
        })
    }
    auth_group.getModel = model => {
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
    return auth_group;
};
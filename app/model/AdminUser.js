/*
 * @Author: 灰白 
 * @Date: 2017-09-07 12:03:58 
 * @Last Modified by: 灰白
 * @Last Modified time: 2017-09-07 16:44:23
 */
module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        id: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            field:'id',
            primaryKey:true,
            autoIncrement:true
        },
        username: {
            type: sequelize.STRING(50),
            allowNull: false,
            field:'username',
            defaultValue:'',
        },
        account: {
            type: sequelize.STRING(50),
            allowNull: false,
            field:'account',
            defaultValue:'',
        },
        password: {
            type: sequelize.STRING(50),
            allowNull: false,
            field:'password',
            defaultValue:'',
        },
        status: {
            type: sequelize.INTEGER(1).UNSIGNED,
            allowNull: false,
            field:'status',
            defaultValue:'1',
        },
        lastLoginTime: {
            type: sequelize.STRING(50),
            allowNull: true,
            field:'last_login_time',
            defaultValue:'',
        },
        lastLoginIp: {
            type: sequelize.STRING(20),
            allowNull: true,
            field:'last_login_ip',
            defaultValue:'',
        } 
  }
  const AdminUser = app.model.define('AdminUser', entity, {
    tableName: 'admin_user'
  });
  AdminUser.getModel=model=>{
							if(typeof model!=="object"){
								throw new  Error("请求参数错误");
								return false;
							  }
							let newobj={};
							for (var key in model) {
								if (entity.hasOwnProperty(key)) {
									newobj[key]=model[key];
								}
							}
						  return newobj;
						}
  return AdminUser;
};
/* jshint indent: 2 */
module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        id: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            primaryKey:true,
        },
        username: {
            type: sequelize.STRING(50),
            allowNull: false,
            defaultValue:'',
        },
        account: {
            type: sequelize.STRING(50),
            allowNull: false,
            defaultValue:'',
        },
        password: {
            type: sequelize.STRING(50),
            allowNull: false,
            defaultValue:'',
        },
        status: {
            type: sequelize.INTEGER(1).UNSIGNED,
            allowNull: false,
            defaultValue:'1',
        },
        last_login_time: {
            type: sequelize.STRING(50),
            allowNull: true,
        },
        last_login_ip: {
            type: sequelize.STRING(20),
            allowNull: true,
        },
        createdAt: {
            type: sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: sequelize.DATE,
            allowNull: false,
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
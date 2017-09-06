/* jshint indent: 2 */
module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        Id: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            field:'id',
            primaryKey:true,
            autoIncrement:true
        },
        Username: {
            type: sequelize.STRING(50),
            allowNull: false,
            field:'username',
            defaultValue:'',
        },
        Account: {
            type: sequelize.STRING(50),
            allowNull: false,
            field:'account',
            defaultValue:'',
        },
        Password: {
            type: sequelize.STRING(50),
            allowNull: false,
            field:'password',
            defaultValue:'',
        },
        Status: {
            type: sequelize.INTEGER(1).UNSIGNED,
            allowNull: false,
            field:'status',
            defaultValue:'1',
        },
        LastLoginTime: {
            type: sequelize.STRING(50),
            allowNull: true,
            field:'last_login_time',
            defaultValue:'',
        },
        LastLoginIp: {
            type: sequelize.STRING(20),
            allowNull: true,
            field:'last_login_ip',
            defaultValue:'',
        },
        CreatedAt: {
            type: sequelize.DATE,
            allowNull: false,
            field:'createdAt',
        },
        UpdatedAt: {
            type: sequelize.DATE,
            allowNull: false,
            field:'updatedAt',
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
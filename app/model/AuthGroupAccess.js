/*
 * @Author: 灰白 
 * @Date: 2017-09-07 12:03:58 
 * @Last Modified by: 灰白
 * @Last Modified time: 2017-09-07 16:44:23
 */
module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        uid: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            field:'uid',
            primaryKey:true,
             // references: {
                  // 引用另一个模型
                  //model: app.model.admin_user,
                  // 连接模型的列表
                  //key: 'id',
                  // 强制使用外键约束，仅适用于 PostgreSQL
                  //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                //}
        },
        gid: {
            type: sequelize.INTEGER(8).UNSIGNED,
            allowNull: false,
            field:'gid',
            primaryKey:true,
             // references: {
                  // 引用另一个模型
                  //model: app.model.auth_group,
                  // 连接模型的列表
                  //key: 'id',
                  // 强制使用外键约束，仅适用于 PostgreSQL
                  //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                //}
        } 
  }
  const AuthGroupAccess = app.model.define('AuthGroupAccess', entity, {
    tableName: 'auth_group_access'
  });
  AuthGroupAccess.associate=()=>{
      app.model.AdminUser.belongsToMany(app.model.AuthGroup,{foreignKey:'uid',through:'auth_group_access' });
      app.model.AuthGroup.belongsToMany(app.model.AdminUser,{foreignKey:'gid',through:'auth_group_access' });
  }
  AuthGroupAccess.getModel=model=>{
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
  return AuthGroupAccess;
};
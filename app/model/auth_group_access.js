/* jshint indent: 2 */

module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        uid: {
            type: sequelize.INTEGER(8).UNSIGNED,
            allowNull: false,
        },
        group_id: {
            type: sequelize.INTEGER(8).UNSIGNED,
            allowNull: false,
        } 
  }
  const auth_group_access = app.model.define('auth_group_access', entity, {
    tableName: 'auth_group_access'
  });
  auth_group_access.getModel=model=>{
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
  return auth_group_access;
};
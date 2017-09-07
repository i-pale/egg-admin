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
            type: sequelize.INTEGER(8).UNSIGNED,
            allowNull: false,
            field:'id',
            primaryKey:true,
            autoIncrement:true
        },
        title: {
            type: sequelize.CHAR(100),
            allowNull: false,
            field:'title',
            defaultValue:'',
        },
        status: {
            type: sequelize.INTEGER(1),
            allowNull: false,
            field:'status',
            defaultValue:'1',
        },
        rules: {
            type: sequelize.STRING(255),
            allowNull: false,
            field:'rules',
            defaultValue:'',
        } 
  }
  const AuthGroup = app.model.define('AuthGroup', entity, {
    tableName: 'auth_group'
  });
  AuthGroup.getModel=model=>{
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
  return AuthGroup;
};
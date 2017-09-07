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
        name: {
            type: sequelize.STRING(80),
            allowNull: false,
            field:'name',
            defaultValue:'',
        },
        title: {
            type: sequelize.STRING(20),
            allowNull: false,
            field:'title',
            defaultValue:'',
        },
        type: {
            type: sequelize.INTEGER(1).UNSIGNED,
            allowNull: false,
            field:'type',
            defaultValue:'1',
        },
        status: {
            type: sequelize.INTEGER(1),
            allowNull: false,
            field:'status',
            defaultValue:'1',
        },
        pid: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            field:'pid',
            defaultValue:'1',
        },
        icon: {
            type: sequelize.STRING(50),
            allowNull: true,
            field:'icon',
            defaultValue:'',
        },
        sort: {
            type: sequelize.INTEGER(4).UNSIGNED,
            allowNull: false,
            field:'sort',
            defaultValue:'1',
        },
        condition: {
            type: sequelize.CHAR(100),
            allowNull: true,
            field:'condition',
            defaultValue:'',
        } 
  }
  const AuthRule = app.model.define('AuthRule', entity, {
    tableName: 'auth_rule'
  });
  AuthRule.getModel=model=>{
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
  return AuthRule;
};
/* jshint indent: 2 */

module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        id: {
            type: sequelize.INTEGER(8).UNSIGNED,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type: sequelize.STRING(80),
            allowNull: false,
        },
        title: {
            type: sequelize.STRING(20),
            allowNull: false,
        },
        type: {
            type: sequelize.INTEGER(1).UNSIGNED,
            allowNull: false,
        },
        status: {
            type: sequelize.INTEGER(1),
            allowNull: false,
        },
        pid: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
        },
        icon: {
            type: sequelize.STRING(50),
            allowNull: true,
        },
        sort: {
            type: sequelize.INTEGER(4).UNSIGNED,
            allowNull: false,
        },
        condition: {
            type: sequelize.CHAR(100),
            allowNull: true,
        } 
  }
  const auth_rule = app.model.define('auth_rule', entity, {
    tableName: 'auth_rule'
  });
  auth_rule.getModel=model=>{
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
  return auth_rule;
};
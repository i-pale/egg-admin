/* jshint indent: 2 */
module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        Id: {
            type: sequelize.INTEGER(8).UNSIGNED,
            allowNull: false,
            field:'id',
            primaryKey:true,
            autoIncrement:true
        },
        Name: {
            type: sequelize.STRING(80),
            allowNull: false,
            field:'name',
            defaultValue:'',
        },
        Title: {
            type: sequelize.STRING(20),
            allowNull: false,
            field:'title',
            defaultValue:'',
        },
        Type: {
            type: sequelize.INTEGER(1).UNSIGNED,
            allowNull: false,
            field:'type',
            defaultValue:'1',
        },
        Status: {
            type: sequelize.INTEGER(1),
            allowNull: false,
            field:'status',
            defaultValue:'1',
        },
        Pid: {
            type: sequelize.INTEGER(5).UNSIGNED,
            allowNull: false,
            field:'pid',
            defaultValue:'1',
        },
        Icon: {
            type: sequelize.STRING(50),
            allowNull: true,
            field:'icon',
            defaultValue:'',
        },
        Sort: {
            type: sequelize.INTEGER(4).UNSIGNED,
            allowNull: false,
            field:'sort',
            defaultValue:'1',
        },
        Condition: {
            type: sequelize.CHAR(100),
            allowNull: true,
            field:'condition',
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
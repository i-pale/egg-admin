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
        Title: {
            type: sequelize.CHAR(100),
            allowNull: false,
            field:'title',
            defaultValue:'',
        },
        Status: {
            type: sequelize.INTEGER(1),
            allowNull: false,
            field:'status',
            defaultValue:'1',
        },
        Rules: {
            type: sequelize.STRING(255),
            allowNull: false,
            field:'rules',
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
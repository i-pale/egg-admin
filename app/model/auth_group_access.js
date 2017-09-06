/* jshint indent: 2 */

module.exports = app => {
  const sequelize = app.Sequelize;
  const entity = {
        uid: {
            type: sequelize.INTEGER(8).UNSIGNED,
        },
        gid: {
            type: sequelize.INTEGER(8).UNSIGNED,
        }
  }
  const auth_group_access = app.model.define('auth_group_access', entity, {
    tableName: 'auth_group_access'
  });
  auth_group_access.associate = function (){
        app.model.AdminUser.belongsToMany(app.model.AuthGroup, { //一对多  
            foreignKey: 'uid', //中间表的关联外键  
            through: 'auth_group_access' //中间表的model  
        })
        app.model.AuthGroup.belongsToMany(app.model.AdminUser, { //一对多  
            foreignKey: 'gid', //中间表的关联外键 
            through: 'auth_group_access' //中间表的model
        })
    }
  return auth_group_access;
};
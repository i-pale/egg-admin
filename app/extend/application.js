module.exports = {
    Initialization:function(app){
      let Encrypt=require('../../lib/util').Encrypt
      app.beforeStart(function* () {
      yield app.model.sync({force: true});
      yield app.model.AuthRule.bulkCreate([
        {name:"/user",title:"用户管理",type:1,status:2,pid:0,sort:1,condition:"用户管理"},
        {name:"/user/update",title:"更新用户",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/user/add",title:"新增用户",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/user/del",title:"删除用户",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/rule/index",title:"系统权限",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/rule/add",title:"新增系统权限",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/rule/edit",title:"更新系统权限",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/rule/del",title:"删除系统权限",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/usergroup",title:"用户组管理",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/usergroup/edit",title:"用户组更新",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/usergroup/add",title:"新增用户组",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/usergroup/del",title:"删除用户组",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
        {name:"/usergroup/authorize",title:"用户组授权",type:2,status:1,pid:0,sort:1,condition:"用户管理"},
      ]);
      yield app.model.AuthGroup.create({title:'超级管理员',status:1,rules:'1,2,3,4,5,6,7,8,9,10,11,12,13'});
      yield app.model.AdminUser.create({username:'灰白',account:"admin",password:Encrypt("123456"),status:1});
      yield app.model.AuthGroupAccess.create({uid:1,gid:1});
    });
}
}

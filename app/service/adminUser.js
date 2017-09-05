module.exports = app => {
  class adminUser extends app.Service {
    * login(username,pwd) {
      let user = yield this.ctx.User.findOne({username:username});
      if(user){
        if(user.password===app.helper.Encrypt(pwd)){
            return user;
        }else{
          throw new Error("密码错误").name="logerr";
        }
      }else{
        throw new Error("账号不存在").name="logerr";
      }
    }
    * getAllList(){
      
    }
    * Add(model){
       model=this.ctx.User.getModel(model);
        let user = yield this.ctx.User.findOne({username:model});
        if(user){
          throw new Error("用户名已被使用").name="regerr";
        }else{
         return yield this.ctx.User.create(model);
        }
    }
    * Update(model){
       model=this.ctx.User.getModel(model);
        let user = yield this.ctx.User.findOne({username:model});
        if(user){
          throw new Error("用户名已被使用").name="regerr";
        }else{
         return yield this.ctx.User.update(model);
        }
    }
  }
  return adminUser;
}; 
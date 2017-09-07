/*
 * @Author: 灰白 
 * @Date: 2017-09-07 12:03:58 
 * @Last Modified by: 灰白
 * @Last Modified time: 2017-09-07 14:03:57
 */
module.exports = app => {
  return class AuthGroupAccessController extends app.Controller {
    * list() {
      try{
        const ctx = this.ctx;
        this.success(yield ctx.service.AuthGroupAccess.list(ctx.query))
      }catch(e){
        this.err(e);
      }
    }
    * get() {
      const ctx = this.ctx;
      ctx.body = yield ctx.service.AuthGroupAccess.find(ctx.params.id);
    }

    * add() {
        try{
        const ctx = this.ctx;
        const body = ctx.request.body;
        body.user_id = +ctx.params.user_id;
        const created = yield ctx.service.AuthGroupAccess.create(ctx.request.body);
        ctx.status = 201;
        this.success(created)
      }catch(e){
        this.err(e);
      }
      
    }

    * edit() {
      try{
        const ctx = this.ctx;
        const id = ctx.params.id;
        const user_id = +ctx.params.user_id;
        const body = ctx.request.body;
        this.success( yield ctx.service.AuthGroupAccess.update({ id, user_id, updates: body }));
      }catch(e){
        this.err(e);
      }
    }

    * delete() {
      try{
        const ctx = this.ctx;
        const id = ctx.params.id;
        yield ctx.service.AuthGroupAccess.del(id);
        ctx.status = 200;
        this.success(true);
      }catch(e){
        this.err(e);
      }
    }
  };
};

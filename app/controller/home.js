'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body="fsaf";
    }
    * about(){
      this.ctx.res.data="fsaf";
    }
    *test(){
      this.ctx.body="aa";
    }
  }
  return HomeController;
};

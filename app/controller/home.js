'use strict';

module.exports = app => {
  class HomeController extends app.Controller {*
    index() {
       this.ctx.body="test";
      }*
      list() {
          console.log("asf");
        this.success("fsafsa");
      }
  }
  return HomeController;
};

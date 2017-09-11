'use strict';

module.exports = app => {
  class MainController extends app.Controller {*
    index() {
       yield this.view();
      }*
      list() {
        this.success("fsafsa");
      }
  }
  return MainController;
};

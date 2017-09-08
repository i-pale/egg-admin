'use strict';

module.exports = app => {
  class MainController extends app.Controller {*
    index() {
        this.view();
      }*
      list() {
        console.log("asf");
        this.success("fsafsa");
      }
  }
  return MainController;
};

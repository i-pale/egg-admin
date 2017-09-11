'use strict';

module.exports = app => {
    class HomeController extends app.Controller { *
        index() {
                this.ctx.body = "test";
            } *
            list() {
                this.success("fsafsa");
            }
    }
    return HomeController;
};
'use strict';

module.exports = app => {
    class HomeController extends app.Controller { *
        index() {
               yield this.view();
            } *
            about() {
                this.ctx.res.data = "fsaf";
            } *
            test() {
                this.ctx.body = "aa";
            }
    }
    return HomeController;
};
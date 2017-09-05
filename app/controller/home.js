'use strict';

module.exports = app => {
    class HomeController extends app.Controller { *
        index() {
                this.ctx.body = yield this.service.adminUser.getAllList(1, 10);
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
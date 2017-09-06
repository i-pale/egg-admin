'use strict';

module.exports = app => {
    class HomeController extends app.Controller { *
        index() {
                this.ctx.body = yield this.service.adminUser.list({});
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
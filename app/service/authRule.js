/*
 * @Author: 灰白 
 * @Date: 2017-09-07 12:03:58 
 * @Last Modified by: 灰白
 * @Last Modified time: 2017-09-07 14:04:25
 */
module.exports = app => {
    class AuthRule extends app.Service {
        * list({
            offset = 0,
            limit = 10,
        }) {
            return yield this.ctx.model.AuthRule.findAndCountAll({
                offset,
                limit
            });
        }

        * find(id) {
            const model = yield this.ctx.model.AuthRule.findById(id);
            if (!model) {
                this.ctx.throw(404, 'model not found');
            }
            return model;
        }

        * create(model) {
            return yield this.ctx.model.AuthRule.create(model);
        }

        * update({
            id,
            updates
        }) {
            const model = yield this.ctx.model.AuthRule.findById(id);
            if (!model) {
                this.ctx.throw(404, 'model not found');
            }
            return yield model.update(updates);
        }

        * del(id) {
            const model = yield this.ctx.model.AuthRule.findById(id);
            if (!model) {
                this.ctx.throw(404, 'model not found');
            }
            return model.destroy();
        }
    }
    return AuthRule;
};
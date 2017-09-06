module.exports = app => {
    class AdminUser extends app.Service {
        * list({
            offset = 0,
            limit = 10,
            order_by = 'createdAt',
            order = 'ASC'
        }) {
            return yield this.ctx.model.AdminUser.findAndCountAll({
                include:{model:this.ctx.model.AuthGroup},
                offset,
                limit,
                order: [
                    [order_by, order.toUpperCase()]
                ],
            });
        }

        * find(id) {
            const model = yield this.ctx.model.AdminUser.findById(id);
            if (!model) {
                this.ctx.throw(404, 'model not found');
            }
            return model;
        }

        * create(model) {
            return yield this.ctx.model.AdminUser.create(model);
        }

        * update({
            id,
            updates
        }) {
            const model = yield this.ctx.model.AdminUser.findById(id);
            if (!model) {
                this.ctx.throw(404, 'model not found');
            }
            return yield model.update(updates);
        }

        * del(id) {
            const model = yield this.ctx.model.AdminUser.findById(id);
            if (!model) {
                this.ctx.throw(404, 'model not found');
            }
            return model.destroy();
        }
    }
    return AdminUser;
};
module.exports = app => {
    class adminUser extends app.Service { *
        login(username, pwd) {
                let user = yield this.model.admin_user.findOne({ username: username });
                if (user) {
                    if (user.password === app.helper.Encrypt(pwd)) {
                        return user;
                    } else {
                        throw new Error("密码错误").name = "logerr";
                    }
                } else {
                    throw new Error("账号不存在").name = "logerr";
                }
            } *
            getAllList(offset, limit) {
                //return yield app.model.query("SELECT * FROM `admin_user` as u inner join auth_group_access as ga on ga.uid=u.id inner join auth_rule as r on r.id=ga.group_id");
                return yield app.model.AdminUser.findAll({
                    include: { model: app.model.AuthGroup, required: true },
                    offset: offset,
                    limit: limit
                });
            } *
            Add(model) {
                model = this.model.User.getModel(model);
                let user = yield app.model.admin_user.findOne({ username: model });
                if (user) {
                    throw new Error("用户名已被使用").name = "regerr";
                } else {
                    return yield this.model.User.create(model);
                }
            } *
            Update(model) {
                model = this.model.User.getModel(model);
                let user = yield this.model.admin_user.findOne({ username: model });
                if (user) {
                    throw new Error("用户名已被使用").name = "regerr";
                } else {
                    return yield this.model.admin_user.update(model);
                }
            }
    }
    return adminUser;
};
module.exports = {
    Initialization: function(app) {
        let Encrypt = require('../../lib/util').Encrypt
        app.beforeStart(function*() {
            yield app.model.sync({ force: true });
            yield app.model.AuthRule.bulkCreate([
                { Name: "/user", Title: "用户管理", Type: 1, Status: 2, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/user/update", Title: "更新用户", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/user/add", Title: "新增用户", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/user/del", Title: "删除用户", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/rule/index", Title: "系统权限", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/rule/add", Title: "新增系统权限", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/rule/edit", Title: "更新系统权限", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/rule/del", Title: "删除系统权限", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/usergroup", Title: "用户组管理", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/usergroup/edit", Title: "用户组更新", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/usergroup/add", Title: "新增用户组", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/usergroup/del", Title: "删除用户组", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
                { Name: "/usergroup/authorize", Title: "用户组授权", Type: 2, Status: 1, Pid: 0, Sort: 1, Condition: "用户管理" },
            ]);
            yield app.model.AuthGroup.create({ Title: '超级管理员', Status: 1, Rules: '1,2,3,4,5,6,7,8,9,10,11,12,13' });
            var AuthGroup = app.model.AuthGroup.build({ Id: 1 })
            AuthGroup.createAdminUser({ Username: '灰白', Account: "admin", Password: Encrypt("123456"), Status: 1 });
        });
    }
}
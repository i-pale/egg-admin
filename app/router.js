'use strict';

module.exports = app => {
    Object.keys(app.controller).forEach(function(controller) {
        Object.keys(app.controller[controller]).forEach(function(action) {
            if((typeof app.controller[controller][action]).toLowerCase() =="object"){
                Object.keys(app.controller[controller][action]).forEach(function(minaction) {
                    app.get('/' + (minaction.toLowerCase() === "index" ? controller + "/" + action : controller + "/" + action+"/"+minaction).toLowerCase(), controller + '.' + action+"."+minaction);
                    //console.log('/' + (minaction.toLowerCase() === "index" ? controller + "/" + action : controller + "/" + action+"/"+minaction).toLowerCase(), controller + '.' + action+"."+minaction)
                })
            }else{
                app.get('/' + (action.toLowerCase() === "index" ? controller : controller + "/" + action).toLowerCase(), controller + '.' + action);
                //console.log('/' + (action.toLowerCase() === "index" ? controller : controller + "/" + action).toLowerCase(), controller + '.' + action);
            }
            //app.get('/' + (action.toLowerCase() === "index" ? controller : controller + "/" + action), controller + '.' + action);
        });
    });
    app.get('/', 'main.index');
    //app.get('/main/list', 'main.list');
};  
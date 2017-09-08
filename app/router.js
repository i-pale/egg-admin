'use strict';

module.exports = app => {
    console.log(app.controller);
    Object.keys(app.controller).forEach(function(controller) {
        Object.keys(app.controller[controller]).forEach(function(action) {
            console.log(app.controller[controller])
            if((typeof app.controller[controller]).toLowerCase() =="object"){
                Object.keys(app.controller[controller][action]).forEach(function(minaction) {
                    app.get('/' + (minaction.toLowerCase() === "index" ? controller + "/" + action : controller + "/" + action+"/"+minaction), controller + '.' + action+"."+minaction);
                    console.log('/' + (minaction.toLowerCase() === "index" ? controller + "/" + action : controller + "/" + action+"/"+minaction), controller + '.' + action+"."+minaction)
                })
            }else{
                app.get('/' + (action.toLowerCase() === "index" ? controller : controller + "/" + action), controller + '.' + action);
                console.log('/' + (action.toLowerCase() === "index" ? controller : controller + "/" + action), controller + '.' + action);
            }
            //app.get('/' + (action.toLowerCase() === "index" ? controller : controller + "/" + action), controller + '.' + action);
        });
    });
    app.get('/', 'main.index');
    //app.get('/main/list', 'main.list');
};  
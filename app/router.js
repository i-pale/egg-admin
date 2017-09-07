'use strict';

module.exports = app => {
  console.log("*****************************************",app.controller)
  Object.keys(app.controller).forEach(function(controller){
    Object.keys(app.controller[controller]).forEach(function(action){
      console.log('/'+(action.toLowerCase()==="index"?controller:controller+"/"+action),controller+'.'+action);
        app.get('/'+(action.toLowerCase()==="index"?controller:controller+"/"+action), controller+'.'+action);
    })
  });
   app.get('/', 'home.index');
  // app.get('/test', 'home.test');
};

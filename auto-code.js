var codeAuto=require("code-auto");
const config = {
        "dialect": "mysql",
        port: '3306',
        "host":  "36.110.131.133",
        "username":  "root",
        "pwd": "Jn597912",
        "storage": "egg_admin",
        tables: null,
        skipTables: null,
        camelCase: false,
        schema: null,
        'Templates': './codetpl',
        codetype: "js",
        camelCase:true
    }
codeAuto.run(config,function(err){
    if(err){
       throw new Error(err);
    }
    console.log("完成")
},function(data){
    //console.log(data);
    //console.log(data["auth_group"]["id"]["foreignKey"]);
})
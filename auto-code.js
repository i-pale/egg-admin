var codeAuto=require("code-auto");
const config = {
        "dialect": "mysql",
        port: '3306',
        "host":  "36.110.131.133",
        "username":  "root",
        "pwd": "Jn597912",
        "storage": "itkee",
        tables: null,
        skipTables: null,
        camelCase: false,
        schema: null,
        'Templates': './codetpl',
        codetype: "js"
    }
codeAuto.run(config,function(err){
    if(err){
       throw new Error(err);
    }
    console.log("完成")
})
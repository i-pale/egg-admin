var _md5 = require('md5');
const crypto = require('crypto');

module.exports = {
    /**
     * 
     * 对字符串进行MD5加密
     * @param {string} [str=''] 
     * @returns 
     */
    MD5(str=''){
        if(!str||(typeof str).toLowerCase()!=="string"){ throw new Error("数据格式错误，无法转换");}
        return _md5(str);
    },
    /**
     * 
     * 对字符串进行sha256加密
     * @param {string} [str=''] 
     * @param {string} [key=''] 
     * @returns 
     */
    SHA256(str='',key=''){
        if(!str||(typeof str).toLowerCase()!=="string"){ throw new Error("数据格式错误，无法转换");}
        return crypto.createHmac("sha256",key).update(str+"&key="+key).digest("hex");
    },
    /**
     * 
     * 将对象属性进行排序并组装为queryString
     * @param {any} [data={}] 
     * @returns 
     */
    objectToString(data={}){
        if(!data||(typeof data).toLowerCase()!=="object"){ throw new Error("数据格式错误，无法转换");}
        var str="";
        Object.keys(data).sort().forEach(function(key,index){
            str+=key+"="+data[key];
            if(index<Object.keys(data).length-1) str+="&"
        });
        return str;
    },
    /**
     * 
     * 为字符串加密
     * @param {string} [text=''] 
     * @returns 
     */
    Encrypt(text=''){
        var cipher = crypto.createCipher('RC4-HMAC-MD5','adminkey');
        var crypted = cipher.update(text,'utf8','hex');
        return crypted += cipher.final('hex');
    },
    /**
     * 
     * 将加密的字符串解密
     * @param {string} [text=''] 
     * @returns 
     */
    Decrypt(text=''){
        var decipher = crypto.createDecipher('RC4-HMAC-MD5','adminkey');
        var dec = decipher.update(text,'hex','utf8');
        return dec += decipher.final('utf8');
    },
    
    /**
     * 
     * 将对象排序并生成签名，返回带签名属性的对象
     * @param {any} [data={}] 
     * @param {string} [type='md5'] 
     * @param {string} [key=''] 
     * @return 
     */
    sign(data={},type='md5',key=''){ data.sign=(type=="md5"?this.MD5(this.objectToString(data),key):this.SHA256(this.objectToString(data),key)).toUpperCase();return data;}
}

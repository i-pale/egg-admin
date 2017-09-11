module.exports = options => {
  return function* history(next) {
    console.log(this.req.url);
    if(this.req._parsedUrl.path.substring(0,5)==="/api/"|| this.req._parsedUrl.path!=="/"||this.req._parsedUrl.path!==""){
        yield next;
    }else{
      console.log("**********转发")
        this.redirect('/');
        yield next;
    }
  };
};
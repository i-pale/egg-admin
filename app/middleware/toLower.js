const url = require("url");
module.exports = options => {
  return function* toLower(next) {
    let lowerUrl=this.req._parsedUrl.pathname.toLowerCase()+(this.req._parsedUrl.search==null?'':this.req._parsedUrl.search);
    this.req.url=lowerUrl
    this.req._parsedUrl=url.parse(lowerUrl);
    yield next;
  };
};
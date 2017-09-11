const url = require("url");
module.exports = options => {
    return function* history(next) {
        if (this.req._parsedUrl.pathname.substring(0, 5) === "/api/" || this.req._parsedUrl.pathname === "/" || /([\S]+[\.][\S]+)/gi.test(this.req._parsedUrl.pathname)) {
            yield next;
        } else {
            let lowerUrl = "/" + (this.req._parsedUrl.search == null ? '' : this.req._parsedUrl.search);
            this.req.url = lowerUrl
            this.req._parsedUrl = url.parse(lowerUrl);
            yield next;
        }
    };
};
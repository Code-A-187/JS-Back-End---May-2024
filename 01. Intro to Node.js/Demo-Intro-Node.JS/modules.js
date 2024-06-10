const qs = require('querystring');

const myURL = new URL ('https://nodejs.org/api/url.html#new-urlinput-base');

console.log(myURL.pathname);

const query = qs.parse('foo=bar&abc=xyz&abc=123');

console.log(query.abc);

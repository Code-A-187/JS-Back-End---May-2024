const http = require('http')
const messageBrocker = require('./messageBrocker');
require('./logger');
require('./reportingService');

const server = http.createServer((req, res) => {
    messageBrocker.publish('request', `URL: ${req.url}; Method: ${req.method}`);

    res.end()
});

server.listen(5000);
console.log("Server is listening on port 5000...");
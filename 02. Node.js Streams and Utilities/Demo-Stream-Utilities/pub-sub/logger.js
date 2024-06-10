const messageBroker = require('./messageBrocker');

messageBroker.subscribe('request', log)

function log(message) {
    console.log("Log: " + message)
};

module.exports = log
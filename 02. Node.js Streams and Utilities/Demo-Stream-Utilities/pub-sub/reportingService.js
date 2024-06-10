const messageBroker = require('./messageBrocker');

messageBroker.subscribe('request', add)

function add(data) {
    console.log("Reporting Service:" + data);
};

module.exports = add

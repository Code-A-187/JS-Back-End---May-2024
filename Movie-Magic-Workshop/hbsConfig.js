const { engine } = require('express-handlebars')
const path = require('path')

function hbsConfig(app) {

    app.engine('hbs', engine({
        extname:'hbs'
    }));

    app.set('view engine', 'hbs');
};

module.exports = hbsConfig;
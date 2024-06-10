const { engine } = require('express-hendlebars')
const path = require('path')

function hbsConfig(app) {

    app.engine('hbs', handlebars.engine({
        extname:'hbs'
    }));

    app.set('view engine', 'hbs');
};

module.exports = hbsConfig;
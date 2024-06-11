const { engine } = require('express-handlebars')
const path = require('path')

function hbsConfig(app) {
    // Set Handlebars engine
    app.engine('hbs', engine({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, 'views', 'layouts'), // Specify layouts directory
    }));

    // Set view engine to Handlebars
    app.set('view engine', 'hbs');
}

module.exports = hbsConfig;
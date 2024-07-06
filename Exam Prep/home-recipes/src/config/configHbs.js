const handlebars = require('express-handlebars')

function configHbs(app) {

    const hbs = handlebars.create({
        extname: 'hbs' 
    });
    
    // Set Handlebars engine
    app.engine('hbs', hbs.engine);

    // Set view engine to Handlebars
    app.set('view engine', 'hbs');
}

module.exports = { configHbs };

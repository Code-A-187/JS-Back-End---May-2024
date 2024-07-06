const cookieParser = require('cookie-parser');
const express = require('express');
const { session } = require('../middlewares/session');

const secret = 'cookie secret'

function configExpress(app) {
    
    app.use(cookieParser(secret));
    app.use(session());

    app.use('/public', express.static('public'));

    app.use(express.urlencoded({ extended: false }));

    app.use(express.json());

    // TO DO add session middleware
};

module.exports = { configExpress }

const cookieParser = require('cookie-parser');
const express = require('express');

const { session } = require('../middlewares/session');
const { cors } = require('../middlewares/cors');

const secret = 'cookie secr3t'

function configExpress(app) {
    
    app.use(cookieParser(secret));
    app.use(session());
    app.use(cors());
    app.use(express.json());

    // TO DO add session middleware
};

module.exports = { configExpress }

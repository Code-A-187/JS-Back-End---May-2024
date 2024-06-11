const express = require('express');
const path = require('path');

function expressConfig(app) {
    
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(express.urlencoded({ extended: false }));

    app.use(express.json());
};

module.exports = expressConfig;


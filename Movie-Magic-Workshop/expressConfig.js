const express = require('express');
const path = require('path');

function expressConfig(app) {
    
    app.use(express.urlencoded({ extended: true }));
    
    app.use(express.json());
    
    app.use(express.static(path.join(__dirname, 'public')));
};

module.exports = expressConfig;


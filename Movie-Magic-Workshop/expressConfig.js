const express = require('express');
const path = require('path');

function expressConfig(app) {
    
    app.use(express.urlencoded({ extended: true }));
    
    app.use(express.json());
    
    app.use(express.static(path.join(__dirname, 'public')));

    app.use((req, res) => {
        res.status(404).redirect('/404');
      });

};

module.exports = expressConfig;


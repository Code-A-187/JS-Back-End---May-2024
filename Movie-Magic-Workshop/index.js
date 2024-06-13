const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const routes = require('./routes');
const hbsConfig = require('./hbsConfig');
const expressConfig = require('./expressConfig')

const app = express();
const port = 3000;



hbsConfig(app);

expressConfig(app);
app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/magic-movies')
    .then(() => {
        console.log('DB Connected successfully');

        app.listen(port, console.log(`The app is running on ${port}...`));
    })
    .catch(err => console.log('Can\'t connect to DB'));




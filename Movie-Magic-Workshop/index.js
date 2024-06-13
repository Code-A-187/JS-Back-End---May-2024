const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const routes = require('./routes');
const hbsConfig = require('./hbsConfig');
const expressConfig = require('./expressConfig')
const Movie = require('./models/Movie');
const Cast = require('./models/Cast')

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('DB Connected successfully'))

hbsConfig(app);

expressConfig(app);
app.use('/', routes);



app.listen(port, console.log(`The app is running ${port}`));

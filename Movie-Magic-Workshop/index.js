const express = require('express');
const path = require('path');
const routes = require('./routes');
const hbsConfig = require('./hbsConfig');
const expressConfig = require('./expressConfig')


const app = express();
const port = 3000;


hbsConfig(app);

expressConfig(app);
app.use('/', routes);



app.listen(port, console.log(`The app is running ${port}`));

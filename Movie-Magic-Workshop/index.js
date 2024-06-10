const express = require('express');
const routes = require('./routes');
const hbsConfig = require('./hbsConfig');
const expressConfig = require('./expressConfig')


const app = express();
const port = 3000;

app.use('/', routes);

hbsConfig(app)

expressConfig(app);

app.listen(port, console.log(`The app is running ${port}`));

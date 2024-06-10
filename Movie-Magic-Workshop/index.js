const express = require('express');
const path = require('path');
const routes = require('./routes');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use((req, res) => {
    res.status(404).redirect('/404');
  });

app.listen(port, console.log(`The app is running ${port}`));



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());

app.get('/data/catalog', (req, res) => {
    res.json([]);
});


app.use(routes);

mongoose.connect('mongodb://localhost:27017/furniture')
    .then(() => console.log('DB Connected'));

app.listen(3030, () => console.log('Server is listening on port 3030...'));

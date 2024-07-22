const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.get('/data/catalog', (req, res) => {
    res.json([]);
});

app.listen(3030, () => console.log('Server is listening on port 3030...'))

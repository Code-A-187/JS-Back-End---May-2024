const { Router } = require('express');
const { getAll, getById, create, update, deleteById } = require('./data');

const router = Router();

router.get('/data', (req, res) => {
    const data = getAll();
    res.json(data);
    
});

router.post('/data', (req, res) => {
    const record = create(req.body);

    res.json(record);
});

router.get('/data/:id', (req, res) => {
    const record = getById(req.params.id);

    if(!record) {
        res.status(404).json( {message: 'Not found', code: 404 })
    } else {
        res.json(record);
    };
})

router.put('/data/:id', (req, res) => {
    const record = update(req.params.id, req.body)

    if(!record) {
        res.status(404).json( {message: 'Not found', code: 404 })
    } else {       
        res.json(record);
    };
});

router.delete('/data/:id', (req, res) => {
    const record = deleteById(req.params.id);

    if (!record) {
        res.status(404).json({
            message: 'Not Found', code: 404
        });
    } else{
        res.json(record);
    }
})




module.exports = { router }

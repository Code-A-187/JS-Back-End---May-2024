const express = require('express');
const router = express.Router();
const furnitureService = require('../services/furnitureService')


router.get('/', async (req, res) => {

    const furnitureData = req.body;

    const furnitures = await furnitureService.getAll();

    res.json(furnitures);
    
});

router.post('/', async (req, res) => {

    const furnitureData = req.body;

    const furniture = await furnitureService.create(furnitureData);

    res.json(furniture); 
    
});


module.exports = router;

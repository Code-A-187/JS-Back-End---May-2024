const express = require('express');
const router = express.Router();
const furnitureService = require('../services/furnitureService')


router.get('/', async (req, res) => {

    const furnitures = await furnitureService.getAll();

    res.json(furnitures);
    
});

router.get('/:id', async (req, res) => {

    const furniture = await furnitureService.getOne(req.params.id);

    res.json(furniture);
    
});

router.put('/:id', async (req, res) => {
    const furnitureData = req.body;
    const furniture = await furnitureService.update(req.params.id, furnitureData);

    res.json(furniture);
    
});

router.delete('/:id', async (req, res) => {
    
    await furnitureService.delete(req.params.id);

    res.json({ ok: true });
    
});

router.post('/', async (req, res) => {

    const furnitureData = req.body;

    const furniture = await furnitureService.create(furnitureData);

    res.json(furniture); 
    
});

module.exports = router;

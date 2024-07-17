const { Router } = require("express");

const catalogRouter  = Router();

catalogRouter.get('/', async (req, res) => {
    res.json([]);
});

catalogRouter.get('/:id', async (req, res) => {
    res.render({});
});

module.exports = { catalogRouter };

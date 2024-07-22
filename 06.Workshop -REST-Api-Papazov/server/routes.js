const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController'); // Ensure correct path
const furnitureController = require('./controllers/furnitureController'); // Ensure correct path

router.use('/users', userController); // Routes prefixed with /api/users
router.use('/data/catalog', furnitureController); // Routes prefixed with /api/data/catalog

module.exports = router;

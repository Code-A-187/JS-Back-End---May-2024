const router = require('express').Router();
const path = require('path');
const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');

router.use(movieController);

router.use(homeController);

router.get('/details/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'details.html'));
});

router.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'search.html'))
});




module.exports = router;
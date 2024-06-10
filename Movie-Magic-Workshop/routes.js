const router = require('express').Router();
const path = require('path');
const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController')

router.use(homeController);

router.use(movieController)

router.get('/details/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'details.html'));
});

router.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'search.html'))
})

router.all('/404', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

module.exports = router;
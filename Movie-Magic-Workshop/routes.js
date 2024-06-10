const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

router.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'create.html'));
});

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
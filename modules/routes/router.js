var express = require('express');
var router = express.Router();
var rnd = require('../controllers/RndController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rnd/:id', rnd.hallo)

module.exports = router;

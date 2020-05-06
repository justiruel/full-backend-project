var express = require('express');
var router = express.Router();
var rnd = require('../controllers/RndController');
var mdw = require('../middlewares/middleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(mdw.validateToken)
router.get('/rnd/:id', rnd.hallo)

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/user', function(req, res, next) {
  res.render('user', { title: 'page for users', username :'MR A-D-M-I-N' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'page for admins', username :'MR A-D-M-I-N' });
});

module.exports = router;

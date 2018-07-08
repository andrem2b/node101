var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});



router.post('/login',   function(req, res) {
    console.log('login post');
    passport.authenticate('local-login', { successRedirect: '/user',
                                      failureRedirect: '/login' });


                                      
  });

router.get('/user', function(req, res, next) {
  console.log('is authenticated : '+req.isAuthenticated());
//  if (! req.isAuthenticated())
 //   res.redirect('/');
  res.render('user', { title: 'page for users', username :'MR U-S-E-R' });
});

router.get('/admin', function(req, res, next) {
  //if (! req.isAuthenticated())
   // res.redirect('/');
  res.render('admin', { title: 'page for admins', username :'MR A-D-M-I-N' });
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});


module.exports = router;

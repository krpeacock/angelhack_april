var express = require('express');
var router = express.Router();
//var knex = require('../db/knex.js');
var methodOverride = require('method-override');
var crypto = require('crypto');
require('locus');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'View Your Reciepts' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});


/* GET home page. */


// Login Request
router.post('/', function(req, res, next) {
  res.redirect('/home');
});
  // var username = req.body.username;
  // var password = req.body.password;
  // var password_hash = crypto.createHash('sha256').update(password).digest('base64');
  // knex.select('password')
  //   .from('users')
  //   .where({username: username})
  //   .then(function(user_list) {
  //     if(user_list.length > 0) {
  //       var user = user_list[0];
  //       if(user.password != password_hash) {
  //         res.send('Error: invalid password.');
  //         //res.redirect('#')
  //         return;
  //       }
  //       res.redirect('/home');
  //     }
  //     // No user: Create User
  //     else {
  //       console.log('Creating user "' + username + '"');
  //       knex('users').insert({
  //         username: username,
  //         password: password_hash
  //       }).then(function() {
  //         res.redirect('/home');
  //       });
  //     }
  //   })



module.exports = router;

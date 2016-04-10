var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var methodOverride = require('method-override');
require('locus');

router.get('/', function(req, res, next) {
 res.render('pantry/show');
});
router.get('/pantry', function(req, res, next) {
 res.render('pantry/show');
});

router.get('/expiring', function(req, res, next){
  res.render('pantry/expiring');
});

module.exports = router;
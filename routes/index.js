var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var methodOverride = require('method-override');
require('locus');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'View Your Reciepts' });
});



module.exports = router;

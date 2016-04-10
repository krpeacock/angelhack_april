var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var methodOverride = require('method-override');
require('locus');

//router.get('/pantry/show', function(req, res, next) {
//  res.render('pantry/show');
//});
//router.get('/pantry', function(req, res, next) {
//  res.render('pantry/show');
//});

module.exports = router;
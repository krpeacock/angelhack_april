var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var methodOverride = require('method-override');
require('locus');

var lists = [{name:'Sautéed Broccoli', ingredients: ['4 slices bacon, cut into 1-inch pieces', 'kosher salt and black pepper']}];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lists/show', {lists});
});
router.get('/new', function(req, res, next) {
  res.render('lists/new');
});
router.get('/:id', function(req, res, next) {
  res.render('lists/show', {lists});
});



module.exports = router;

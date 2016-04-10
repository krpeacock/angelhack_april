var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var methodOverride = require('method-override');
var http = require('https');
require('locus');


router.get('/new', function(req, res, next){
  res.render('receipts/new');
});

router.get('/', function(req, res, next) {
  res.render('receipts/show');
});

// Second Callback
function text_filter(data) {
  console.log(data);
}

// First Callback
function text_callback(req,res,next){
  var text_back = new Promise(function(resolve, reject) {
    eval(locus)
    http.post({
      hostname: 'api.havenondemand.com',
      port: '443',
      path: '/1/fe962457-0f26-424a-bd97-663116f742fd/sync/ocrdocument/v1',
    }, function(response){
       res.on('data', text_filter);
    });
  });
}

router.post('/new', text_callback);

module.exports = router;

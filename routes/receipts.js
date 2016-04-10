var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var methodOverride = require('method-override');
var http = require('https');
var hod = require('havenondemand');
var multer = require('multer');
var upload = multer({dest: '/tmp'});

client = new hod.HODClient('fe962457-0f26-424a-bd97-663116f742fd','v1');
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
var text_callback = function(req, res){
  eval(locus)
  var image = req.body.image;
  client.call('ocrdocument', image).on('data', text_filter);
};



/*function text_callback(req,res,next){
  var text_back = new Promise(function(resolve, reject) {
    http.post({
      hostname: 'api.havenondemand.com',
      port: '443',
      path: '/1/fe962457-0f26-424a-bd97-663116f742fd/sync/ocrdocument/v1',
    }, function(response){
      eval(locus)
       res.on('data', text_filter);
    });
  });
}*/

router.post('/', upload.single('image'), text_callback);

module.exports = router;

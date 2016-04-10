var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var methodOverride = require('method-override');
var http = require('https');
var hod = require('havenondemand');
var fs = require('fs');
var multer = require('multer');
var request = require('request');

// fs.createReadStream('images/receipt.jpg').pipe(request.post('http://10.0.1.21:5000/'));


var storage = multer.diskStorage({
    destination: function(req, file, callback){
      callback(null, '../uploads');
    },
    filename: function(req, file, callback){
      callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({storage : storage}).single('image');

client = new hod.HODClient('fe962457-0f26-424a-bd97-663116f742fd','v1');
require('locus');

router.get('/', function(req, res, next) {
  res.render('receipts/index');
});

router.get('/new', function(req, res, next){
  res.render('receipts/new');
});



// Second Callback
function text_filter(data) {
  console.log(data);
}

// First Callback
var text_callback = function(req, res){
  client.call('ocrdocument', 'http://livingsuperhuman.com/wp-content/uploads/2012/02/011.jpg').on('data', text_filter);
};
// This post request works.
https://api.havenondemand.com/1/api/sync/ocrdocument/v1?url=http://livingsuperhuman.com/wp-content/uploads/2012/02/011.jpg&apikey=fe962457-0f26-424a-bd97-663116f742fd
//



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

router.post('/', function(req, res){
  res.redirect('/receipts/show');
});

module.exports = router;

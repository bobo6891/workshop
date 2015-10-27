// instance router
var express = require('express');
var router  = express.Router();


// ROUTERS

router.get('/', function (req, res) {
  	res.render('index');
});

router.get('/products', function(req, res){
	router.send('For GET in Application');
});

router.post('/products', function(req, res){
	router.send('For POST in Application');
});

// exporting module
module.exports = router;
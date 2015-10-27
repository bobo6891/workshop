// start module express
var express = require('express');
var app 	= express();

// start module to body data base and specify methods PUT POST DELETE UPDATE
var bodyParser 	   = require('body-parser');
var methodOverride = require('method-override');
var path 		   = require('path');

// start module router
var routes = require('./routes');

// specify of methods
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

// others modules
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, '/public')));

// Routers
app.set('views', './views');
app.set('view engine', 'jade');


// Render index.jade
app.use('/', routes);

// Page not found - Error 404
app.use(function(req, res, next){
  res.render('404', { title: "404 Error!" });
});

// startr server
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Application running in http://%s:%s', host, port);
});
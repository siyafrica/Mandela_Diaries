var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

var routes = require('./routes/index');
var users = require('./routes/users');
var database = require('./routes/database');
var methodOverride = require('method-override');
var templatemain = require('./routes/template-main');

var app = express();

// Methodoverride at the top
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//serving static files
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/css'));
app.use('/public', express.static(__dirname + '/js'));
app.use('/public', express.static(__dirname + '/images'));

app.use('/', routes);

app.use('/', routes);
app.use('/database', database);
app.use('/create', database);
app.use('/delete', database);
app.use('/:id', database);
// app.use('/database/#{entry._id}?/delete', database);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

app.listen(8080);

console.log("The server has started");
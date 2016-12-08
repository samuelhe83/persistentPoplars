var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');

// Need to sort out how morgan will work with heroku:
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.cookieParser());
app.use(express.session({ secret: 'secretkeyforthepoplartree' }));
app.use(passport.initialize());
app.use(passport.session());

require('./app/routes.js')(app, express, passport);
require('./config/passport.js');

app.use(express.static(__dirname + '/../client'));

app.listen(4568);
console.log('Server started on 4568');
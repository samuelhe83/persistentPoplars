var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');
app.use(session({
  secret: 'secretkeyforthepoplartree',
  resave: false,
  saveUninitialized: false
}));


// Need to sort out how morgan will work with heroku:
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../client'));

require('./config/passport.js')(passport);
require('./app/routes.js')(app, express, passport);


//Does this do anything?
var db = require('./db/dbConfig');


app.listen(4568);
console.log('Server started on 4568');
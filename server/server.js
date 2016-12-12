var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var db = require('./db/dbConfig');
var path = require('path');


app.use(session({
  secret: 'secretkeyforthepoplartree',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(morgan('dev'));
app.use(bodyParser.json());






app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, '/../client')));

require('./config/passport.js')(passport);
require('./app/routes.js')(app, express, passport);

// Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Oops! Something broke on our end. Please refresh');
});


app.listen(4568);
console.log('Server started on 4568');
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

// DOES PASSPORT SPECIFICALLY REQUIRE THE COOKIE PARSER?
// I don't think we need it:
// "Note Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work." https://github.com/expressjs/session
// See also: http://stackoverflow.com/questions/29122638/usage-of-cookie-parser-with-passport-js-still-needed
  // var cookieParser = require('cookie-parser');
  // app.use(cookieParser());

// EXPRESS DOT THE FOLLOWING IS DEPRECATED, DO WE NEED THIS?
  // app.use(express.cookieParser());
  // app.use(express.session({ secret: 'secretkeyforthepoplartree' }));



// Commenting out Passport to work on DB:
// app.use(passport.initialize());
// app.use(passport.session());

// require('./app/routes.js')(app, express, passport);
// require('./config/passport.js');

app.use(express.static(__dirname + '/../client'));


var db = require('./db/dbConfig');


// Error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Oops! Something broke on our end. Please refresh');
});


app.listen(4568);
console.log('Server started on 4568');
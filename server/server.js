var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Need to sort out how morgan will work with heroku:
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'))

app.listen(4568);
console.log('Server started on 4568');
var express = require('express');
var app = express();
var db = require('./database/db');

var UserController = require('./database/user/UserController');
app.use('/users', UserController);

module.exports = app;
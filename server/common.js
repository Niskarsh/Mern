const hbs = require("hbs");
var express = require("express");
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname +"/../public"));
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
  }));

module.exports = app;
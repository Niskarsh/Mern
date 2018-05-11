var express = require('express');
var app = express();
const hbs = require("hbs");
// Handlebars viewing engine
app.set('view engine', 'hbs');

// route set
app.get('/', function (req, res) {
  res.render('home.hbs');
});

app.get("/signin",(req,res)=>{
    res.render("signin.hbs");
});

app.get("/signup",(req,res)=>{
    res.render("signup.hbs");
});
app.listen(4000);
// Listening
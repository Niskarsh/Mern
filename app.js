var express = require('express');
var app = express();
const hbs = require("hbs");

app.set('view engine', 'hbs');


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
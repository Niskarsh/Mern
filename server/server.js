var {mongoose} = require("./mongoose");
var {todos} = require("./models/todos");
var {users} = require("./models/users");

var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());

app.post("/signup",(req,res)=>{
    var user = new users({
        username: req.body.username,
        password: req.body.password
    });
    user.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.send(e);
    });
});


app.listen(4001,()=>{
    console.log("Started listening");
});
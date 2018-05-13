var {mongoose} = require("./mongoose");
var {todos} = require("./models/todos");
var {users} = require("./models/users");
const hbs = require("hbs");
var express = require("express");
var app = express();

// Handlebars viewing engine
app.set('view engine', 'hbs');
var bodyparser = require("body-parser");
app.use(bodyparser.json());
// POST requests
app.post("/signin",(req,res)=>{
    
    users.find({"username" : req.body.username}).then((user)=>{
        console.log(user[0].username);
        if(user[0].password===req.body.password){
            return res.render("user_page.hbs",{
                name : user[0].username});
        }


    },(e)=>{
        res.send(res.render(e));

    });
});


app.post("/signup",(req,res)=>{
    var user = new users({
        username: req.body.username,
        password: req.body.password
    });
    user.save().then((doc)=>{
        res.render("signin.hbs");
    },(e)=>{
        res.send(e);
    });
    
});
// GET Requests
app.get('/', function (req, res) {
    res.render('home.hbs');
  });
  
app.get("/signin",(req,res)=>{
      res.render("signin.hbs");
});

app.get("/signup",(req,res)=>{
    res.render("signup.hbs");
});

app.listen(4001,()=>{
    console.log("Started listening");
});
var {mongoose} = require("./mongoose");
var {todos} = require("./models/todos");
var {users} = require("./models/users");
const hbs = require("hbs");
var express = require("express");
var app = express();
var $= require("jquery");

// Handlebars viewing engine
app.set('view engine', 'hbs');
app.use(express.static(__dirname +"/../public"));
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
  }));
// POST requests
app.post("/signin",(req,res)=>{
    console.log("Post is on")
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    // console.log(req.body)
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    
    
    users.findOne({"username" : req.body.username}).then((user)=>{
        // console.log(user.username);
        if(user.password===req.body.password){
            // console.log("Final");
            var u="/user/"+user.username;
            console.log(u);
            // console.log("jQuery working " +$("#username").get("0").value);
            $.get(u);
            // $.get(u,{},(data)=>{
            //     console.log("get firing "+data);
            // });
            //res.render("user_page.hbs",{ name:user.username});
        }
    }).catch(e=>(e)=>{
        res.send(res.render(e));
})
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

app.get("/user/:user",(req,res)=>{
    console.log("Get fired user "+req.params.user);
    res.render("user_page.hbs",{
    name : req.params.user
    });
});
``



app.listen(3001,()=>{
    console.log("Started listening");
});
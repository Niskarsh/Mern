var {mongoose} = require("./mongoose");
var {todos} = require("./models/todos");
var {users} = require("./models/users");
const hbs = require("hbs");
var express = require("express");
var app = express();



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
    users.findOne({"username" : (req.body.username).toString()}).then(function(user){
        if(!(user===null)){
            if(user.password===req.body.password){
                var u = "/user/"+user.username; 
                console.log(u);      
                return res.redirect(u);
            }
            alert("Incorrect password");

        }else{
            alert("User not registered");
        }
        
    },(err)=>{
        console.log(err);
    });
   
});


app.post("/signup",(req,res)=>{
    console.log("Post fired");
    var user = new users({
        username: req.body.username,
        password: req.body.password
    });
    console.log(user);
    user.save().then((doc)=>{

    }).catch (e=> console.log(e));
    
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
    // if(req.params.user==="Niskarsh"){
    //     return;
    // }
    console.log("Get fired user "+req.params.user);
    res.render("user_page.hbs",{
    name : req.params.user
    });
});

app.get("/user/:user/add",(req,res)=>{
    res.render("addTodo.hbs",{
        name:req.params.name
    });
});




app.listen(3000,()=>{
    console.log("Started listening on 3000");
});
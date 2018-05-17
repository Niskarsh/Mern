var {mongoose} = require("./mongoose");
var {todos} = require("./models/todos");
var {users} = require("./models/users");
var signinPost = require("./routes/signin_post.js");
var signupPost = require("./routes/signup_post.js");
var addTodoPost = require("./routes/addTodo_post.js");
var app = require("./common.js");

app.post("/signin",(req,res)=>{
    signinPost(req.body.username,req.body.password,res);   
});


app.post("/signup",(req,res)=>{
    signupPost(req.body.username,req.body.password,res);   
});


app.post("/user/:user/add",(req,res)=>{
    addTodoPost(req.params.user, req.body.task, req.body.cstatus, req.body.p,res);
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

app.get("/user/:user/add",(req,res)=>{
    res.render("addTodo.hbs",{
        name:req.params.name
    });
});

app.get("/user/:user/show",(req,res)=>{
    res.render("showTodo.hbs",{
        name:req.params.name
    });
});




app.listen(3000,()=>{
    console.log("Started listening on 3000");
});
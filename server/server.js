var {mongoose} = require("./mongoose");
var {todos} = require("./models/todos");
var {users} = require("./models/users");
var signinPost = require("./routes/signin_post.js");
var signupPost = require("./routes/signup_post.js");
var addTodoPost = require("./routes/addTodo_post.js");
var app = require("./common.js");
var port = process.env.PORT||3002;

app.post("/signin",(req,res)=>{
    signinPost(req.body.username,req.body.password,res);   
});


app.post("/signup",(req,res)=>{
    signupPost(req.body.username,req.body.password,res);   
});


app.post("/user/:user/add",(req,res)=>{
    addTodoPost(req.params.user, req.body.task, req.body.cstatus, req.body.p,res);
});

app.post("/user/:user/show",(req,res)=>{
    console.log("Fired");
    todos.find({"user":(req.params.user).toString()}).then((user)=>{
        res.json(JSON.stringify(user));
    },()=>{}).catch();
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

app.get("/user/dashboard",(req,res)=>{
    console.log("New "+req);
    res.render("user_page.hbs",{
    name : req.username
    });
});

app.get("/user/:user/add",(req,res)=>{
    res.render("addTodo.hbs",{
        name:req.params.user
    });
});

app.get("/user/:user/show",(req,res)=>{
    res.render("showTodo.hbs",{
        name:req.params.user,
        
    });
});




app.listen(port,()=>{
    console.log('Started listening on'+ port);
});
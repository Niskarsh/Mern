var {todos} = require("./../models/todos");
var a =function(user,task,cstatus,p,res){
    var todo= new todos({
        task:task,
        completeStatus: cstatus,
        priority: p

    });
    todo.save().then((doc)=>{
        res.redirect("/user/"+user);
    },()=>{}).catch();
}
module.exports=a;
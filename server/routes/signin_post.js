var {users} = require("./../models/users");
var a =function(username,password,res){
        users.findOne({"username" : (username).toString()}).then(function(user){
        if(!(user===null)){
            if(user.password===password){
                var u = "/user/dashboard"; 
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
}
module.exports=a;
var {users} = require("./../models/users");
var a =function(username,password,res){
    var user = new users({
        username: username,
        password: password
    });
    console.log(user);
    user.save().then((doc)=>{

    }).catch (e=> console.log(e));
}
module.exports=a;
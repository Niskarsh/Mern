var mongoose = require("mongoose");

var users = mongoose.model("users",{
    username:{
        type:String,
        required : true,
        trim : true,


    },
    password:{
        type : String,
        required : true,
        trim : true

    }
});

module.exports = {users};
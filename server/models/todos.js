var mongoose = require("mongoose");

var todos = mongoose.model("todo",{
    task:{
        type:String,
        required : true,
        trim : true,


    },
    completeStatus:{
        type : Boolean,
        required : true,
        trim : true

    },
    priority:{
        type : Number,
        required : true,
        trim : true,

    },
    // user:{
    //     type:String
    // }
});

module.exports = {todos};
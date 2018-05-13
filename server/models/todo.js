var mongoose = require("mongoose");

var todo = mongoose.model("todo",{
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
        type:integer,
        required : true,
        trim : true,

    }
});

module.exports = {todo};
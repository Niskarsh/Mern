const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://127.0.0.1:27017/todo", (err, db)=>{
    if(err){
        return console.log(err);
    }
    console.log("Fuck yeah chutiye");
    
    
    
    
    db.close();

}

);
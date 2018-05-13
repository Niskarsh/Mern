const mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017/", (err, db)=>{
    if(err){
        return console.log("Nah");
    }
    console.log("Fuck yeah chutiye");
    
    
    
    

    db.db("Todoapp").collection("Signin").insertOne({
        username:"Nik",
        password:"shit"
    },(err, result)=>{
        if(err){
            return console.log("Chuda re");
        }
        console.log(JSON.stringify(result));
    });


    
    
    
    db.close();

}

);
const mongoose = require("mongoose");
const Live_url = "mongodb+srv://harsh:harsh123@cluster0.dbh1cak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async() => {
    return mongoose.connect(Live_url)

    .then(() =>{
        console.log("Database Connection succesful");
    })
    .catch((error)=>{
        console.log("error");
    })
};

module.exports=connectDB;
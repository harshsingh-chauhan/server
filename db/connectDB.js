const mongoose = require("mongoose");
// const Live_url = "mongodb+srv://harsh:harsh123@cluster0.dbh1cak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async() => {
    return mongoose.connect(process.env.LIVE_URL)//mongodb://127.0.0.1:27017/coursebooking

    .then(() =>{
        console.log("Database Connection succesful");
    })
    .catch((error)=>{
        console.log("error");
    })
};

module.exports=connectDB;
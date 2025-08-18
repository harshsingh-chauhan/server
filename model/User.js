const mongoose = require("mongoose");
const UserS = new mongoose.Schema({
    name:{
        type : String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default:"Student"
    },
})

const UserModel = mongoose.model('User',UserS)
module.exports=UserModel
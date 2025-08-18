const mongoose = require("mongoose");
const TeacherS = new mongoose.Schema    ({
    name:{
        type : String
    },
    email:{
        type : String
    },
    password:{
        type : String
    }
})

const TeacherModel =new mongoose.model('teacher',TeacherS)
module.exports=TeacherModel
const mongoose = require("mongoose");
const courseS = new mongoose.Schema({
    title:String,
    descrption:String,
    price:Number,
    duration:String,
    image:{
        public_id: {
            type : String,
            require : true
        },
        url : {
            type :String,
            require:true
        }
    }
})

const CoursetModel = mongoose.model('course',courseS)
module.exports=CoursetModel
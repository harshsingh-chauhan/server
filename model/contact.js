const mongoose = require("mongoose");
const contactS = new mongoose.Schema({
    name:{
        type : String
    }
})

const ContactModel = mongoose.model('contct',contactS)
module.exports=ContactModel
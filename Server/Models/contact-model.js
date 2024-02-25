const mongoose = require("mongoose")
contactSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
      
    },
    email:{
        type:String,
        required:true,
    },
    message:{
    type:String,
        required:true,
}

})
const Contact = mongoose.model("Contact",contactSchema)

module.exports = Contact; 
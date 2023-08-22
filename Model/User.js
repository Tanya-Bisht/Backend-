const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    username:String,
    userpassword:String,
    useremail:String
});

module.exports=mongoose.model("Customers",UserSchema);      //database created in mongo db 
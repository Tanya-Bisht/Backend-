const mongoose=require("mongoose");
const uri="mongodb+srv://tanyabisht:Sunfox2040@cluster0.hldcccp.mongodb.net/Suvidha?retryWrites=true&w=majority";

const connectDB=()=>{
    console.log("db connected")
    mongoose.connect(uri);
};

module.exports=connectDB;                              //db connectivity
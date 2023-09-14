const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    chips:String,
    chocolate:String,
    drink:String,
    userid:String
});

module.exports=mongoose.model("Products",ProductSchema);
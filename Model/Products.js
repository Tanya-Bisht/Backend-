const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    chips:String,
    chocolate:String,
    drinks:String
});

module.exports=mongoose.model("Products",ProductSchema);
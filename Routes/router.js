const express=require("express");
const router=express.Router();
const userAuthorization=require("./userAuthorization");



router.use('/auth',userAuthorization);



module.exports=router;
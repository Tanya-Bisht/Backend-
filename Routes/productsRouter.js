const express=require('express');
const authorization = require('../Middleware/authorization');
const router=express.Router();

router.post('/',authorization,(req,res)=>{
    res.send("Products added");

});
router.get('/id:',(req,res)=>{
    res.send("signup page");
});

module.exports=router;
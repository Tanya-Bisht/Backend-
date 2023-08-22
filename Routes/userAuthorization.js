const express=require('express');
const router=express.Router();
const User=require("../Model/User");


router.post('/login',(req,res)=>{
    
    

});
router.post('/signup',async(req,res)=>{
   
    console.log(req.body);
    const { name, email, password } = req.body;
   console.log(name, email, password);

   try {

      if (await User.findOne({ useremail: email })) {
         return res.status(400).send("User already exists . Please use another email or go to Login Page");
      }
      const result = await User.create({
        username: name,
        useremail: email,
         userpassword:password
      });
      res.send(result);
      console.log(result);


   }
   catch (err) {
      console.log(err);
   }
    
});

module.exports=router;
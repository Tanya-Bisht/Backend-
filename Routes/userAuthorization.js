const express=require('express');
const router=express.Router();
const User=require("../Model/User");
const jwt=require("../Middleware/tokenGenration");



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


router.post('/login',async(req,res)=>{

   const {email,password}=req.body;
   
      const user=await User.findOne({useremail:email});
      console.log(user);
      if(!user){
         res.send("User not found. Please signup first");
      }
      if(user.userpassword===password){
         const token = jwt(user.useremail,user._id);
         res.status(200).json({
            token: token
         });
      }
      else{res.send("incorrect password");}

});

module.exports=router;
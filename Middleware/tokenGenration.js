const jwt=require("jsonwebtoken");

 const jwtToken=(email,id)=>{
   return jwt.sign({email,id},"Api Secret Key",{expiresIn:"2h"});



 }
 module.exports=jwtToken;
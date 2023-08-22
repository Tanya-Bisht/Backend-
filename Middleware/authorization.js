
const jwt = require("jsonwebtoken");
const  authorization=async (req,res,next)=>{
    try {
      
        let token = req.headers.authorization;
        if (token) {
          
           const decoded = jwt.verify(token, "Api Secret Key");
           
           const user=await User.findOne({_id:decoded.id})
           if(!user)
            {
              res.status(401).json({ message: "User not Found " });
           }
           req.userId = decoded.id;
              next();
        }
        else {
           res.status(401).json({ message: "Unauthorized user" });
        }
     }
     catch (err) {
        console.log(err);
     }
}

module.exports=authorization;
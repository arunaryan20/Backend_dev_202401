const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.isAdmin=(req,res,next)=>{
    try{
            const token=req.headers['authorization'];
       
            jwt.verify(token, process.env.PRIVATE_KEY, function(err, decoded) {
                   if(err){
                  
                    res.status(400).json({code:400,message:"Invalid user",Error:err});
                   }else{
                        
                       req.decoded=decoded;
                       next();  

                   }
              });
    }catch(err){
        res.status(404).json({code:404,message:"Invalid user",Error:err});
    }
}
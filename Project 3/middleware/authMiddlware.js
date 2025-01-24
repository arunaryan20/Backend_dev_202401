exports.isUser=(req,res)=>{
        try{
                
        }catch(err){
            res.status(404).json({code:404,message:"Invalid user"});
        }
}
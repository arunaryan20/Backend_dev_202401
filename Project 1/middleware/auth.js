exports.isAdmin=(req,res,next)=>{
    const is_admin=false;    
    if(is_admin){
        console.log("Middleware is running");
        next();
    }else{
            res.send("Aap authenticated nhi ho");
    }
}
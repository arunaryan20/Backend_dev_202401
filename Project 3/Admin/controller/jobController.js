const jobModel=require("../../models/job");
exports.createJob=async(req,res)=>{
          try{
                 const {title,post,location,qualification}=req.body;
                 const data={
                    title:title,
                    post:post,
                    location:location,
                    qualification:qualification  
                 }
                 await jobModel.create(data);
                 res.status(201).json({code:200,message:"Job created successfuly"});
          }catch(err){
             res.status(500).json({code:500,message:"Internal server error"});
          }
}
const jobModel=require("../models/job");
const appliedJobsModel=require("../models/appliedJobsModel");
exports.jobList=async(req,res)=>{
         try{
               const result= await jobModel.find();
               res.status(200).json({code:200,message:"Job list",Data:result});      
            
         }catch(err){
              res.status(500).json({code:500,message:"Internal server error"});
         }  
}

exports.applyJob=async(req,res)=>{
          try{
                 const {jobId}=req.body;
                 const data={
                     userId:req.decoded.userId,
                     jobId:jobId
                 }
                 await appliedJobsModel.create(data);

                res.status(201).json({code:200,message:"Job applied"});

          }catch(err){
            res.status(500).json({code:500,message:"Internal server error"});
          }
}
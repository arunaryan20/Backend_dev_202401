const mongoose=require("mongoose");

const appliedJobsSchema=new mongoose.Schema({
          userId:{
             type:mongoose.Types.ObjectId,
             ref:"Users",
             required:true
          },
          jobId:{
            type:mongoose.Types.ObjectId,
            ref:"Job",
            required:true
          }
},{timestamps:true});

module.exports=mongoose.model("AppliedJob",appliedJobsSchema)
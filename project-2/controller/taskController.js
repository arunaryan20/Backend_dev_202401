const taskModel=require("../models/taskModel");
exports.createTask=async(req,res)=>{
        try{
                const data=req.body;
                let temp={
                    name:data.name
                }
                const result= await taskModel.create(temp);
                res.status(200).json({code:200,message:"Data Inserted"})
        }catch(err){
            res.status(500).json({success:false,message:"Internal server error",Error:err});
        }
}
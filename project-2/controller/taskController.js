const taskModel=require("../models/taskModel");
exports.createTask=async(req,res)=>{
        try{
                const {name}=req.body;
                let data={
                    name:name
                }
                await taskModel.create(data);
                res.status(200).json({code:201,message:"Data Inserted"})
        }catch(err){
            res.status(500).json({code:500,message:"Internal server error",Error:err});
        }
}

exports.getNameList=async(req,res)=>{
              try{
                     const result=await taskModel.find();       
                      res.status(200).json({code:200,message:"Task list",Data:result})
              }catch(err){
                res.status(500).json({code:500,message:"Internal server error",Error:err})
              }
}

exports.deleteTask=async(req,res)=>{
    try{
             const id=req.params.id;
             const filter={
                _id:id
             }
        await taskModel.findOneAndDelete(filter);
        res.status(200).json({code:200,message:"Data deleted successfuly"});
    }catch(err){
        res.status(500).json({code:500,message:"Internal server error",Error:err});
    }
}

exports.updateTask=async(req,res)=>{
         try{
                 const id=req.params.id;
                 const {name}=req.body;
                 const filter={
                    _id:id
                 }   
                 const data={
                    name:name
                 } 
                 await taskModel.findByIdAndUpdate(filter,data);
              res.status(200).json({code:200,message:"Task updated successfuly"});
         }catch(err){
            res.status(500).json({code:500,message:"Internal server error",Error:err});
         }
}
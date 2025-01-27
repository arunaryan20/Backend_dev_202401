const mongoose=require("mongoose");

const jobSchema=new mongoose.Schema({
         title:{
            type:String,
            required:true
         },
         post:{
            type:String,
            required:true
         },
         location:{
            type:String,
            required:true
         },
         qualification:{
            type:String,
            required:true
         },
},{timestamps:true});

module.exports=mongoose.model("Job",jobSchema);
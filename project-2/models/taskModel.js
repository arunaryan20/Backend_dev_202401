const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
       name:{
        type:String,
        required:true,
        unique:true
       }
})

module.exports=mongoose.model("Task",taskSchema);
const mongoose=require("mongoose");

const adminProfileSchema=new mongoose.Schema({
            email:{
                 type:String,
                 required:true
            },
            password:{
                type:String,
                required:true
            }

},{timestamps:true});

module.exports=mongoose.model("Admin",adminProfileSchema);
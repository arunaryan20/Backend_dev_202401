const mongoose=require("mongoose");
require("dotenv").config();
exports.dbConnect=()=>{
    const dbUrl=process.env.DB_URL;
    mongoose.connect(dbUrl).then((res)=>{
        console.log("Connected to Database");
    }).catch((err)=>{
        console.log("Error in db connection--->",err);
    })
}
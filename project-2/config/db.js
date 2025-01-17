const mongoose=require("mongoose");
require("dotenv").config();
exports.dbConnect=()=>{
            mongoose.connect(process.env.DB_URL).then(()=>{
                 console.log("Connected to database");
            }).catch((err)=>{
                console.log("Error while connecting to the db",err);
            })
}
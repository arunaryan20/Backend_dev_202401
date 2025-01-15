const mongoose=require("mongoose");
require("dotenv").config();
exports.dbConnect=()=>{
   mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => {
    console.log("Error in db connection--->",err);
  });


    //    try{
    //          mongoose.connect(process.env.DB_URL);
    //          console.log("Connected to database")
    //    }catch(err){
    //         console.log("Errror in Database connection-->",err);
    //    }
}
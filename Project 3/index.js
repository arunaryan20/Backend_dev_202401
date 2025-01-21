const express=require('express');
const server=express();
require("dotenv").config();
const port=process.env.PORT;

// Database connection
const databaseConnection=require("./config/database");
databaseConnection.dbConnect();

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
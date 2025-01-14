const express =require("express");
const server=express();

const PORT=8080;

const router=require("./routes");
const cartRouter=require("./cartRoute");

server.use("/api",router);
server.use("/cart",cartRouter);



server.listen(PORT,()=>{
    console.log("Server is running on PORT--->",PORT);
})

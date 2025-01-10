// const http=require("http");
// const PORT=5000;

// const server=http.createServer((req,res)=>{
//       res.end("Response from server");
// });


const express=require("express");
const server=express();

const PORT=5000;

server.get("/",(req,res)=>{
      res.send("Response from server by get method");
});

server.get("/",(req,res)=>{
   res.send("Response from server by post method");
})


server.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
})
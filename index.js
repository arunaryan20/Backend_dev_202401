const expresss=require("express");
const server=expresss();

const PORT=5000;

const router=require("./route");
const appRouter=require("./app");

server.use("/api",router);

const middleware=(req,res,next)=>{
         console.log("Hello from middleware");
         next();
}

server.use("/dept",middleware,appRouter);

// const middlewareFunction=(req,res,next)=>{
//    console.log("Middleware function");
//    // res.send("jlksjflk");
//    next();
// }

// server.get("/",middlewareFunction,(req,res)=>{
//    res.send("Response from server");
// })


server.listen(PORT,()=>{
   console.log("server is running on PORT--->"+PORT);
})
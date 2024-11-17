const express=require("express");
const app=express()
//middleware
app.use("/",(req,res,next)=>{
    console.log("Hello from middleware")
   // res.send("response")
    next()
})
app.get("/user",(req,res)=>{
    res.send("from middleware")
    console.log("Hello from middleware")
})
app.listen(7777,()=>{
    console.log("server is running on port 7777");
})


const express=require("express");
const app=express()
app.use("/test",(req,res)=>{
   res.send("hellow world is here")
})
app.use("/12",(req,res)=>{
    res.send("its a number series")
})
app.listen(7777,()=>{
    console.log("server is running on port 7777");
})


const express=require("express");
const app=express()
// app.use("/test",(req,res)=>{
//    res.send("hellow world is here")
// })
// app.use("/12",(req,res)=>{
//     res.send("its a number series")
// })

app.get("/login",(req,res)=>{
    res.send("its a login data")
})
app.post("/login",(req,res)=>{
    res.send("its a post data")
})
app.delete("/login",(req,res)=>{
    res.send("its a delete data")
})

app.listen(7777,()=>{
    console.log("server is running on port 7777");
})


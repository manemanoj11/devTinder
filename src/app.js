const express=require("express");
const app=express()
//middleware
const {adminAuth,userAuth}=require("./middlewares/auth")
app.use("/admin",adminAuth)

app.post("/User/login",(req,res)=>{
    res.send("User logged in sucessfully")
})
app.get("/user/data",userAuth,(req,res)=>{
    res.send("User data send")
})
app.get("/admin/getAllData",(req,res)=>{
    res.send("All Data sent")
})
app.listen(7777,()=>{
    console.log("server is running on port 7777");
})


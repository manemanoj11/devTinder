const express=require("express");
const app=express()
// app.use("/test",(req,res)=>{
//    res.send("hellow world is here")
// })
app.get("/user/:userid",(req,res)=>{
    console.log(req.params)
    res.send({firstname:"Mane",lastName:"Manoj"})
//to read the Dynamic routes http://localhost:7777/user/19
})

app.get("/user",(req,res)=>{
    console.log(req.query)
    res.send({firstname:"mane",lastName:"manoj"})
    // to read the url http://localhost:7777/user?userid=561&password=1
})

// app.get("/login",(req,res)=>{
//     res.send("its a login data")
// })
// app.post("/login",(req,res)=>{
//     res.send("its a post data")
// })
// app.delete("/login",(req,res)=>{
//     res.send("its a delete data")
// })

app.listen(7777,()=>{
    console.log("server is running on port 7777");
})


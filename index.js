const express=require("express");
const jwt=require("jsonwebtoken");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.json());

app.get("/login",(req,res)=>{

    const userDetails=req.body;
    const secret_Key="mahi@/#@%99";
    const token=jwt.sign(userDetails,secret_Key);
    res.send({"token ":token})
})


app.get("/signup",(req,res)=>{
    const secret_Key="mahi@/#@%99";
    const token=req.headers['authorization'].split(" ")[1];
    const decode=jwt.verify(token,secret_Key);
    console.log("Token =>",token);
    if(decode){
        res.send({message:decode})
    }else{
        res.send({message:"User is Not Registred"})
    }
    
})


app.listen(5000,()=>{
    console.log("Server is Running on the 5000 Port");
})

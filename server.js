const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

//db connections

const db = async() =>{
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to db");
    }
    catch(err){
        console.log(err);
    }
}
db();


app.get('/',async (req,res)=>{
    try{
        const datas = "kavin is online"
        res.send({
            datas
        })
    }
    catch(err){
        console.log(err);
    }
})

app.listen(5000,()=>{
    console.log("server is up and running");
});
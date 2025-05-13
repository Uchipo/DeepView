import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());


app.listen(process.env.PORT);

app.get('/',(req,res)=>{
    res.status(200).json({message:"드디어!!!"})
})

app.get("/win",(req,res)=>{
    res.status(200).send("이겼다~~~")
})
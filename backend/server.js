const express= require('express');
const dotenv= require('dotenv');
const {chats}=require("./data/data");
const app=express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send("API is running succesfully")
});
app.get('/API/chat',(req,res)=>{
       res.send(chats);
});
app.get('/API/chat/:id',(req,res)=>{
    const singlechat=chats.find((c)=> c._id==req.params.id);
    res.send(singlechat);
});
const PORT=process.env.PORT || 5000
app.listen(5000,console.log('server has strted on PORT ${PORT} ')); 
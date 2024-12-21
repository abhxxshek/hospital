const express=require('express');
const app=new express();


const basicroutes=require('./routes/basic');
app.use('/basic',basicroutes);





app.listen(7000,(req,res)=>{
    console.log("The server is listening on port:7000");
});
const express = require("express");
const port=8000;
const app=express();


app.get("/",function(req,res)
{
    res.send("Cool! Everything is working fine here");
    // res.send("<h1>Cool! Everything is working fine here</h1>");  // Unlike NodeJs here we don't have to write head to serve the HTML content to browser
});



app.listen(port,function(err)
{
    if(err)
        console.log("err",err);
    console.log("Server is up and running on port",port);
});
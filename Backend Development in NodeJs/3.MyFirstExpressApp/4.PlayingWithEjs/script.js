const express = require("express");
const port=8000;
const path=require("path");
const app=express();

app.set("view engine","ejs");  // This step is to configure the ejs template engine after which js looks for views folder
app.set("views",path.join(__dirname,"views"));

app.get("/",function(req,res)
{
    return res.render("home",
    {name:"Bharath",
     title: "Playing with ejs"}); // 1st parametere is filename, 2nd parameter is to pass the variables to browser to make a dynamic webpage
});



app.listen(port,function(err)
{
    if(err)
        console.log("err",err);
    console.log("Server is up and running on port",port);
    console.log(__dirname);
});
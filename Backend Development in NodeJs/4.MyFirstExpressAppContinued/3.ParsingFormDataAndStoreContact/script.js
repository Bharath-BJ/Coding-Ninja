const express = require("express");
const port=8000;
const app=express();
const path=require("path");

app.set("view engine","ejs"); // This step is to configure the ejs template engine after which js looks for views folder
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());  // Parsing the form data into the body obj inside req obj

var contactList=[
    {name:"Bharath",phone:"7092444182"},
    {name:"Appa",phone:"9944702919"},
    {name:"Sangeetha",phone:"9500379645"}
];

app.get("/contact-list",function(req,res)
{
    return res.render("practice",{
        title: "My Contact List",
        contact_list: contactList   // 1st parameters is filename, 2nd parameter is to pass the variables to browser to make a dynamic webpage
    });
});

app.get("/",function(req,res)
{
    return res.render("home");
});

app.post("/create-contact",function(req,res)  // Here we check if form data are accepted or not with the help of redirect function and dara parsing has to be done next
{
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.phone);
    contactList.push(req.body);
    return res.redirect("/contact-list")
});

app.listen(port,function(err){
    if(err)
       console.log("err",err);
    console.log("Server is up and running on port:",port);
    console.log(__dirname);     
});

const express=require("express");
const port=8000;
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
/*  Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.      */

// User defined middleware function 1
app.use(function(req,res,next)
{
    req.myName="Bharath";
    console.log("From the middleware function1");
    next();  // next must be invoked for the successive middleware function to get executed
});

// User defined middleware function 2
app.use(function(req,res,next)
{
    console.log("From the middleware function2:",req.myName);
    next();  // next must be invoked for the router function to get executed
});

app.get("/",function(req,res)
{
    console.log("From the get home router function:",req.myName);
    res.render("home");
});

var contactList=[
    {name:"Bharath",phone:"7092444182"},
    {name:"Appa",phone:"9944702919"},
    {name:"Sangeetha",phone:"9500379645"}
];

app.get("/contact-list",function(req,res)
{
    console.log("From the get contact list router function:",req.myName);
    res.render("practice",{
        title: "My Contact list",
        contact_list: contactList
    });
});


app.post("/create-contact",function(req,res)
{
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.phone);
    contactList.push(req.body);
    return res.redirect("/contact-list")
});
app.listen(port,function(err)
{
    if(err)
        console.log("err",err);
    console.log("Server is up and running on port:",port);
    console.log(__dirname);
});
const express=require("express");
const port=8000;
const path=require("path");
const db=require("./config/mongoose");
// Here instead of having list of contacts, we get the contactlist from DB
const Contact=require("./models/contact"); 
const app=express();

app.set("view engine","ejs"); // This step is to configure the ejs template engine after which js looks for views folder
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());  // Parsing the form newContact into the body obj inside req obj using middleware funstion
app.use(express.static("assets")); // To get the access to css,images and js files using middleware funstion


app.get("/contact-list",function(req,res)
{
     // Here we are using then & catch method, as callback functions are no longer used(deprecated)
    Contact.find({})  // First parameter can be used to filter the data to be fetched
    .then((contacts)=>{
        return res.render("practice",{
            title: "My Contact List",
            contact_list: contacts   // 1st parameters is filename, 2nd parameter is to pass the variables to browser to make a dynamic webpage
        });
    })
    .catch(err=>{
            console.log("Error in fetching the contacts from the DB",err);
            return;
    });
    
});


app.get("/",function(req,res){
    return res.render("home");
});

app.post("/create-contact",function(req,res)  // Populating the user input into the DB
{
    console.log("While creating contact");
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.phone);                  
    // Here we are using then & catch method, as callback functions are no longer used(deprecated)
    Contact.create({    
        name: req.body.name,
        phone: req.body.phone
    }).then(newContact => {
        console.log(newContact)
        res.redirect("back");
    })
    .catch(err=>{
        console.log("Error occured in creating new contact",err);
        })
   
});

app.get("/delete-contact/",function(req,res)  // Here deletion process take place with the query params passed from the contact list
{                                                   // Remember there is nothing here in the router whereas there is no '?{paramName}={value}' in the <a> tag of the delete icon
    console.log("Whiling deleting contact");
    console.log(req.query);                      // Advantage of query params is we can take multiple params from the webpage 
    let phone=req.query.phone;
    let contactIndex=contactList.findIndex(item => item.phone==phone);
    if(contactIndex!= -1)
        contactList.splice(contactIndex,1);
    res.redirect("back");
});

app.listen(port,function(err)
{
    if(err)
        console.log("Error", err);
    console.log("Server is up and running on port",port);
    console.log(__dirname);
});
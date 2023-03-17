const mongoose =require("mongoose");
mongoose.set("strictQuery", false);

// connect to db, Remember localhost will not work here if we didn't express it as 127.0.0.1
mongoose.connect("mongodb://127.0.0.1/contact_list_db", {useNewUrlParser: true,useUnifiedTopology:true});  

// acquire the connection to check if the connection was successful
const db=mongoose.connection;  

db.on("error",console.error.bind(console,"Error connecting to DB"));  // error if the connection failed

db.once("open",function()
{
    console.log("Successfully connected to Database");
});


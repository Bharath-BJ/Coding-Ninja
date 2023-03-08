const http= require('http');
const port= 8000;  // port for HTTP
const fs=require("fs");
function requestHandler(req,res)
{
    console.log(req.url);
    res.writeHead(200,{"content-type":"text/html"}); // This statement is not required for HTML doc rendering, but useful for error printing
    fs.readFile("./index.html",function(err,data)
    {
        if(err)
        {
            console.log("Error",err);
            res.end("<h2>Error<h2>");
            return;
        }
        res.end(data);
    });
}
const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }  
    console.log("Server is up and running on port:", port);
});

// Here we setup the server and response HTML content to the browser, but this way 
// is not suitable for rendering bunch of HTML contents. Will see another method to render HTML doc as a whole 
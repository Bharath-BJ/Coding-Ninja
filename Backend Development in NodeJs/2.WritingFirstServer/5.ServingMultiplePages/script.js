const http= require('http');
const port= 8000;  // port for HTTP
const fs=require("fs");
function requestHandler(req,res)
{
    console.log(req.url);
    var filePath;
    switch(req.url) {
        case '/home':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default: 
            filePath = './404.html';
        }
    console.log(filePath);
    res.writeHead(200,{"content-type":"text/html"});  // This statement is not required for HTML doc rendering, but useful for error printing 
    fs.readFile(filePath,function(err,data)
    {
        if(err)
        {
            console.log("Error",err);
            res.write("<h2>Error<h2>");
            res.end();
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
        return;s
    }  
    console.log("Server is up and running on port:", port);
});

// Here we setup the server for rendering HTML doc as a whole depending on the url passed form the client side
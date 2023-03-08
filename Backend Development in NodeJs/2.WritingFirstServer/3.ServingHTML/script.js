const http= require('http');
const port= 8000;  // port for HTTP
function requestHandler(req,res)
{
    console.log(req.url);
    res.writeHead(200,{"content-type":"text/html"});
    res.end("<h2>Got it man!!</h2>");
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

// Here we setup the server and response HTML content to the browser, but this way 
// is not suitable for rendering bunch of HTML contents. Will see another method to render HTML doc as a whole 
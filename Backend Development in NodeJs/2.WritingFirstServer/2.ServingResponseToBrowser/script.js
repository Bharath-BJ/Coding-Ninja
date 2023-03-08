const http= require('http');
const port= 8000;  // port for HTTP
function requestHandler(req,res)
{
    console.log(req.url);
    res.end("Got it man!!");
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

// Here we setup the server and response to the browser next we will look into rendering HTML content to browser
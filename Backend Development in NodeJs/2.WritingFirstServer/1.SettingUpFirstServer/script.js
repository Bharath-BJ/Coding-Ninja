const http= require('http');
const port= 8000;  // port for HTTP
const server = http.createServer();
server.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }  
    console.log("Server is up and running on port:", port);
});

// Here we setup the server but there is no response sent to the browser so far
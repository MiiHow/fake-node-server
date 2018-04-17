var http = require('http');
//create a server object:

http.createServer(function (req, res) {
    res.write('Hello World AGAIN!'); //write a response to the client
    res.end(); //end the response
    console.dir(res);
}).listen(8080); //the server object listens on port 8080

console.log('WORKS');
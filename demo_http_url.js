var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Conent-Type': 'text/html'});
    res.write(req.url);//write a response to the client
    res.end(); // end the resposne
}).listen(8080); //the server object listens on port 8080
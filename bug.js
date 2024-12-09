const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); // This will throw an error if port 8080 is already in use

//This error is not handled and causes the application to crash unexpectedly.
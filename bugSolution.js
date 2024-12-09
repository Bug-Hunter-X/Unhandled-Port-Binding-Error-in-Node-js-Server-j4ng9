const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port 8080 is already in use.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`An error occurred:`, err);
    process.exit(1);
  }
});

server.listen(8080); 
console.log('Server listening on port 8080');
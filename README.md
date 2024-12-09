# Unhandled Port Binding Error in Node.js Server

This repository demonstrates a common error in Node.js server applications: crashing without proper error handling when attempting to bind to an already occupied port.

The `bug.js` file contains a simple HTTP server that does not handle the error of attempting to bind to port 8080 if it's already in use. This will result in the application crashing silently.

The solution, provided in `bugSolution.js`, demonstrates how to gracefully handle this error using the `'error'` event of the HTTP server.
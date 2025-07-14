// Import the built-in 'http' module
const http = require('http');

// Define a port number
const PORT = 3000;

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server!');
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

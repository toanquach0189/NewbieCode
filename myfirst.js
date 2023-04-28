const http = require('http');

const hostname = '127.0.0.1';
const port = 81;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1> Hello <\h1>');
  res.write('<h2> World <\h2>');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("🚨 Insecure Node App Running!");
});
server.listen(3000);

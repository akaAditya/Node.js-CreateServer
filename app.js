const http = require("http");
const route = require("./routes")

console.log(route.text)
const server = http.createServer(route);

server.listen(4000);

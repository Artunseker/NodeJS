const http = require("http"); // import eder
const routes = require("./routes");

var server = http.createServer(routes);//export edilen fonksiyon gelir

server.listen(8000);//8000 den gelen istekleri kabul etcek

console.log("Server is listening on port 8000");
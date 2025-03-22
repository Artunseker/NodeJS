var http = require("http"); // import eder

function requestListener(request,response){
    response.end();//talebi döndürdüm 
}

var server = http.createServer(requestListener);

server.listen(8000);//8000 den gelen istekleri kabul etcek

console.log("Server is listening on port 8000");
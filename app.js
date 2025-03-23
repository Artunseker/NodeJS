var http = require("http"); // import eder
var fs = require("fs");

var server = http.createServer((request,response)=>{
    if(request.url === "/"){
        fs.readFile("index.html",(error,html)=>{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(html);
            response.end();
        });
    }
    else if(request.url === "/hakkimda"){
        fs.readFile("hakkımda.html",(error,html)=>{
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(html);
            response.end();
        });
    }
    else{
        fs.readFile("404.html",(error,html)=>{
            response.writeHead(404,{"Content-Type":"text/html"});
            response.write(html);
            response.end();
        });
    }

});

server.listen(8000);//8000 den gelen istekleri kabul etcek

console.log("Server is listening on port 8000");
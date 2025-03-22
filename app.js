var http = require("http"); // import eder


var server = http.createServer((request,response)=>{
    //console.log(request.url,request.method);
    //console.log(response.statusCode);
    response.setHeader('Content-Type',"text/html");
    response.statusCode = 200;
    response.statusMessage="OK";
    
    response.write("<h1> Ana Sayfa </h1>");
    response.write("<p> Urunler </p>");

    response.end();
});

server.listen(8000);//8000 den gelen istekleri kabul etcek

console.log("Server is listening on port 8000");
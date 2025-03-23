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
    else if(request.url === "/create"&&request.method === "POST"){
        const data = [];
        request.on("data",(chunk)=>{
            data.push(chunk);
        });

        request.on("end",()=>{
            const result = Buffer.concat(data).toString();
            const parsedData = result.split("=")[1];
            
            fs.appendFile("data.txt",parsedData,(err) =>{//data.txt dosyasına parseddatayı yazdırır
                if(err){
                    console.log(err);
                }
                else{
                    response.statusCode = 302;
                    response.setHeader("Location","/");//'/' sayfasına yönlendirme yapar
                    response.end();
                }
            });

        });

        

    }
    else if(request.url === "/create"){
        fs.readFile("create.html",(error,html)=>{
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
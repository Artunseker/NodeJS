var http = require("http"); // import eder


var server = http.createServer((request,response)=>{
    if(request.url === "/"){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Ana Sayfa</title>
                </head>
                <body>
                    <h1>Hoş Geldiniz</h1>
                </body>
            
            </html>`);
        response.end();
    }
    else if(request.url === "/hakkimda"){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Hakkımda</title>
                </head>
                <body>
                    <h1>Hakkimda</h1>
                </body>
            
            </html>`);
        response.end();
    }
    else{
        response.writeHead(404,{"Content-Type":"text/html"});
        response.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>404</title>
                </head>
                <body>
                    <h1>Sayfa Bulunamadi</h1>
                </body>
            
            </html>`);
        response.end();
    }
    
});

server.listen(8000);//8000 den gelen istekleri kabul etcek

console.log("Server is listening on port 8000");
var fs = require("fs");


const routeHandler=(request,response)=>{
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
        request.on("data",(chunk)=>{//data yı chunklara böler
            data.push(chunk);
        });

        request.on("end",()=>{
            const result = Buffer.concat(data).toString();//chunkları birleştirir ve stringe çevirir
            const parsedData = result.split("=")[1];//resultu = işaretine göre böler ve 1. indeksi alır
            
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
}



module.exports = routeHandler; //dışarıya routeHandler fonksiyonunu export eder



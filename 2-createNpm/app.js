// Generally given app or server .js as file name

var http = require("http");

var fs = require('fs'); // file system kisaltmasi

var server = http.createServer(function(req,res){

    if(req.url == "/"){
        fs.readFile("index.html", function(err,data){
            res.write(data);
            res.end("Bitti");
        });
    }

    else if(req.url == "/login"){
        fs.readFile("login.html", function(err,data){
            res.write(data);
            res.end("Bitti");
        });
    }
    
});

server.listen(8000);
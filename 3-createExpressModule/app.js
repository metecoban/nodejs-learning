// Generally given app or server .js as file name

var http = require("http");

var fs = require('fs'); // file system kisaltmasi

var express = require("express"); //express modulunu ekliyoruz
var path = require("path") // dosya yolunu vermek icin
var app = express();
app.use('/public',express.static(path.join(__dirname, 'public'))); //kullaniciya public dosyasini paylasiyoruz

app.get('/', function(req,res){
    fs.readFile("index.html", function(err,data){
        res.write(data);
        res.end("Bitti");
    });
});

app.get('/login', function(req,res){
    fs.readFile("login.html", function(err,data){
        res.write(data);
        res.end("Bitti");
    });
});


app.listen(8000);
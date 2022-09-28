// Generally given app or server .js as file name.

var http = require("http");

var express = require("express"); //express modulunu ekliyoruz.
var path = require("path"); // dosya yolunu vermek icin.
var app = express();
var specificRoute = require('./app_server/routers/SpecificRoute'); // router modulumunuzu ekliyoruz.


app.use('/public',express.static(path.join(__dirname, 'public'))); //kullaniciya public dosyasini paylasiyoruz.

app.use('/spesifik', specificRoute);

app.listen(8000);
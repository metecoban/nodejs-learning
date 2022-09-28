// Generally given app or server .js as file name.

var http = require("http");

var express = require("express"); //express modulunu ekliyoruz.
var path = require("path"); // dosya yolunu vermek icin.
var app = express();
var ownControllerModul = require('./UrlController'); // kendi modulumuzu import ediyoruz.

app.use('/public',express.static(path.join(__dirname, 'public'))); //kullaniciya public dosyasini paylasiyoruz.

app.get('/',ownControllerModul.index ); // kendi modulumuzden fonksiyonumuzu cagirdik.
app.get('/login', ownControllerModul.login);

app.listen(8000);
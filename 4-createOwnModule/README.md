# fs kullanmak yerine eklemis oldugumuz Express modulunun icinde bulunan sendFile ile .html sayfamizi yolladik

`app.get('/', function(req,res){res.sendFile(path.join(__dirname,'index.html'));
});`

# Sonrasinda bu kullanimi daha da sadelestirmek ve kendi controller modulumuzu kullanmak icin yeni bir .js olusturduk.

Burada olusturdugumuz modulun kullanabilmesi icin `module.exports.blabla` seklinde fonksiyonu tanimlamamiz gereklidir.

Sonrasinda `require()` ile siniftan bir obje uretip kendi olusturdugumuz modulu kullanabilmekteyiz.
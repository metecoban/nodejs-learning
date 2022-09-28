// Kendi olusturdugumuz controller modulumuz.
var path = require('path');

module.exports.index = function(req,res){ // module.expots yapisini kullandik!
    res.sendFile(path.join(__dirname, '../../index.html')); // direk index anasayfamizi yolluyoruz.
};

module.exports.login = function(req,res){
    res.sendFile(path.join(__dirname, '../../login.html')); // login sayfamizi yolluyoruz.
};
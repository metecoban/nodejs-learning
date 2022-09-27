npm = node package manager
---
1- `npm install` yazarak projeye ekliyoruz.

npm ile calistirmak icin `nodemon app.js` yaziyoruz terminale ve calisiyor.

----
2- `npm install -g nodemon ` yazarak package.json da belirttigimiz scripts degiskeni icerisinde start a gore baslamasini sagliyoruz.

npm start yazmamiz yeterli calismasi icin.

----
3- `npm install express --save` yazarak node modullerini ekliyoruz ayrica --save yazarak package icerisine dependences e express olarak ekleniyor. Buda baska projeye tasimak istedigimizde otomatik olarak dosyalarin kurulmasini sagliyor.

silmek icin `npm remove express --save` yazmamiz yeterli olmaktadir.

// 

var express = require('express');
var router = express.Router();
var ownControllerModul = require('../controller/UrlController')

router.get('/',ownControllerModul.index);
router.get('/login', ownControllerModul.login);

module.exports = router;
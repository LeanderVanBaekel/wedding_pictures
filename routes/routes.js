var express = require('express');
var router = express.Router();


var home = require('../controllers/home');
router.get('/', home.get);


module.exports = router;

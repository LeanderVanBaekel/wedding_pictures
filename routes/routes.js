var express = require('express');
var router = express.Router();

var upload = multer({ dest: 'uploads/' })


var home = require('../controllers/home');
router.get('/', home.get);

var fileCtrl = require('../controllers/fileCtrl');
router.post('/upload/create', upload.array('file'), fileCtrl.postCreate);


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'REACT JS example', name: 'joe' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('dataStructures', { title: 'Data Structures and Algorythms' });
});

module.exports = router;

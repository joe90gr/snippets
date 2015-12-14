var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('hashmap', { title: 'hashmaps from server' });
});

module.exports = router;

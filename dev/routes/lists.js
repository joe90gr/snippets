var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('lists', { title: 'lists from server' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('iterators', { title: 'iterators from server' });
});

module.exports = router;

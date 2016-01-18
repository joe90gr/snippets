var express = require('express');
var router = express.Router();
import { graphAlgorithm } from '../common/algorithms/algorithms.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Algorithms', model: [ graphAlgorithm ] });
});

module.exports = router;

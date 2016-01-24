import express from 'express';
import { graphAlgorithm } from '../common/algorithms/algorithms.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Algorithms', model: [ graphAlgorithm ] });
});

module.exports = router;

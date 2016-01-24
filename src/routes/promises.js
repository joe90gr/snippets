import express from 'express';
import { promises, promisesOne, promisesTwo } from '../common/esSixFeatures/promises.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Promises', model: [ promises, promisesOne, promisesTwo ] });
});

module.exports = router;

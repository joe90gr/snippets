var express = require('express');
var router = express.Router();
import { promises, promisesOne, promisesTwo } from '../common/esSixFeatures/promises.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Promises', model: [ promises, promisesOne, promisesTwo ] });
});

module.exports = router;

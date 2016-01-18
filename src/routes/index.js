var express = require('express');
var router = express.Router();
import { examples, example1, example2, example3, example4 } from '../common/reactExamples/examples.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Home', model: [ examples, example1, example2, example3, example4 ] });
});

module.exports = router;

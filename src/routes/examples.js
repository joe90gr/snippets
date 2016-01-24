import express from 'express';
import { examples, example1, example2, example3, example4 } from '../common/reactExamples/examples.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'REACT JS example', model: [ examples, example1, example2, example3, example4 ] });
});

module.exports = router;

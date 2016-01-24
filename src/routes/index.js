import express from 'express';
import { examples } from '../common/reactExamples/examples.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Home', model: [ examples ] });
});

module.exports = router;

import express from 'express';
import { factory } from '../common/patterns/factory.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Factory', model: [ factory ] });
});

module.exports = router;

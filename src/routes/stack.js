import express from 'express';
import { pushToStack, palinDromes } from '../common/dataStructures/stacks.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Stacks', model: [ pushToStack, palinDromes ] });
});

module.exports = router;

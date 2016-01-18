var express = require('express');
var router = express.Router();
import { pushToStack, palinDromes } from '../common/dataStructures/stacks.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Stacks', model: [ pushToStack, palinDromes ] });
});

module.exports = router;

var express = require('express');
var router = express.Router();
import { linkedLists, circularLinkedList } from '../common/dataStructures/linkedLists.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'LinkedLists', model: [ linkedLists, circularLinkedList ] });
});

module.exports = router;

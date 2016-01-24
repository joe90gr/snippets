import express from 'express';
import { linkedLists, circularLinkedList } from '../common/dataStructures/linkedLists.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'LinkedLists', model: [ linkedLists, circularLinkedList ] });
});

module.exports = router;

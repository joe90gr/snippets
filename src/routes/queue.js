import express from 'express';
import { queues, dancers, radixSort, priorityQueue } from '../common/dataStructures/queues.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Queues', model: [ queues, dancers, radixSort, priorityQueue ] });
});

module.exports = router;

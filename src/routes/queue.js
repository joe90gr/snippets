var express = require('express');
var router = express.Router();
import { queues, dancers, radixSort, priorityQueue } from '../common/dataStructures/queues.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Queues', model: [ queues, dancers, radixSort, priorityQueue ] });
});

module.exports = router;

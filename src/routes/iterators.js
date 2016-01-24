import express from 'express';
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from '../common/dataStructures/iterators.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Iterators', model: [ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ] });
});

module.exports = router;

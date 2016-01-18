var express = require('express');
var router = express.Router();
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from '../common/dataStructures/iterators.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Iterators', model: [ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ] });
});

module.exports = router;

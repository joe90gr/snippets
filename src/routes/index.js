import express from 'express';
import { examples, example1, example2, example3, example4 } from '../common/reactExamples/examples.js';
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward } from '../common/dataStructures/lists.js';
import { linkedLists, circularLinkedList } from '../common/dataStructures/linkedLists.js';
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from '../common/dataStructures/iterators.js';
import { queues, dancers, radixSort, priorityQueue } from '../common/dataStructures/queues.js';
import { pushToStack, palinDromes } from '../common/dataStructures/stacks.js';
import { hashMaps, hashMapIntegers } from '../common/dataStructures/hashMaps.js';
import { formatMessages } from '../common/formatMessage/formatMessages.js';
import { promises, promisesOne, promisesTwo } from '../common/esSixFeatures/promises.js';
import { graphAlgorithm } from '../common/algorithms/algorithms.js';
import { factory } from '../common/patterns/factory.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Home', model: [ examples ] });
});

router.get('/examples', function (req, res, next) {
	res.render('index', { title: 'REACT JS example', model: [ examples, example1, example2, example3, example4 ] });
});

router.get('/lists', function (req, res, next) {
	res.render('index', { title: 'Lists', model: [ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ] });
});

router.get('/linked-lists', function (req, res, next) {
	res.render('index', { title: 'LinkedLists', model: [ linkedLists, circularLinkedList ] });
});

router.get('/iterators', function (req, res, next) {
	res.render('index', { title: 'Iterators', model: [ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ] });
});

router.get('/queue', function (req, res, next) {
	res.render('index', { title: 'Queues', model: [ queues, dancers, radixSort, priorityQueue ] });
});

router.get('/stack', function (req, res, next) {
	res.render('index', { title: 'Stacks', model: [ pushToStack, palinDromes ] });
});

router.get('/queues', function (req, res, next) {
	res.render('index', { title: 'Queues', model: [ queues, dancers, radixSort, priorityQueue ] });
});

router.get('/hashmap', function (req, res, next) {
	res.render('index', { title: 'Hashmaps', model: [ hashMaps, hashMapIntegers ] });
});

router.get('/format-messages', function (req, res, next) {
	res.render('index', { title: 'FormatMessages', model: [ formatMessages ] });
});

router.get('/promises', function (req, res, next) {
	res.render('index', { title: 'Promises', model: [ promises, promisesOne, promisesTwo ] });
});

router.get('/algorithms', function (req, res, next) {
	res.render('index', { title: 'Algorithms', model: [ graphAlgorithm ] });
});

router.get('/factory', function (req, res, next) {
	res.render('index', { title: 'Factory', model: [ factory ] });
});

export default router;

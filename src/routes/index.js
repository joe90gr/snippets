import express from 'express';
import contentService from '../services/contentService';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Home', model: contentService('index') });
});

router.get('/examples', function (req, res, next) {
	res.render('index', { title: 'REACT JS example', model: contentService('examples') });
});

router.get('/lists', function (req, res, next) {
	res.render('index', { title: 'Lists', model: contentService('lists') });
});

router.get('/linked-lists', function (req, res, next) {
	res.render('index', { title: 'LinkedLists', model: contentService('linked-lists') });
});

router.get('/iterators', function (req, res, next) {
	res.render('index', { title: 'Iterators', model: contentService('iterators') });
});

router.get('/queue', function (req, res, next) {
	res.render('index', { title: 'Queues', model: contentService('queue') });
});

router.get('/stack', function (req, res, next) {
	res.render('index', { title: 'Stacks', model: contentService('stack') });
});

router.get('/queues', function (req, res, next) {
	res.render('index', { title: 'Queues', model: contentService('queues') });
});

router.get('/hashmap', function (req, res, next) {
	res.render('index', { title: 'Hashmaps', model: contentService('hashmap') });
});

router.get('/format-messages', function (req, res, next) {
	res.render('index', { title: 'FormatMessages', model: contentService('format-messages') });
});

router.get('/promises', function (req, res, next) {
	res.render('index', { title: 'Promises', model: contentService('promises') });
});

router.get('/classes', function (req, res, next) {
	res.render('index', { title: 'Classes', model: contentService('classes') });
});

router.get('/algorithms', function (req, res, next) {
	res.render('index', { title: 'Algorithms', model: contentService('algorithms') });
});

router.get('/factory', function (req, res, next) {
	res.render('index', { title: 'Factory', model: contentService('factory') });
});

export default router;

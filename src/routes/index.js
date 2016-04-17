import express from 'express';
import contentService from 'services/contentService';

var router = express.Router();

router.get('/', function (req, res, next) {
	var data = contentService('index');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/examples', function (req, res, next) {
	var data = contentService('examples');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/lists', function (req, res, next) {
	var data = contentService('lists');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/linked-lists', function (req, res, next) {
	var data = contentService('linked-lists');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/iterators', function (req, res, next) {
	var data = contentService('iterators');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/queue', function (req, res, next) {
	var data = contentService('queue');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/stack', function (req, res, next) {
	var data = contentService('stack');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/queues', function (req, res, next) {
	var data = contentService('queues');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/hashmap', function (req, res, next) {
	var data = contentService('hashmap');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/format-messages', function (req, res, next) {
	var data = contentService('format-messages');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/promises', function (req, res, next) {
	var data = contentService('promises');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/classes', function (req, res, next) {
	var data = contentService('classes');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/algorithms', function (req, res, next) {
	var data = contentService('algorithms');

	res.render('index', { title: data.title, model: data.content });
});

router.get('/factory', function (req, res, next) {
	var data = contentService('factory');

	res.render('index', { title: data.title, model: data.content });
});

export default router;

import express from 'express';
import contentService from 'services/contentService';

var router = express.Router();

router.get('*', function (req, res, next) {
	var data = contentService(req.path.substr(1) === '' ? 'index' : req.path.substr(1));

	res.render('index', { title: data.title, model: data.content });
});

export default router;

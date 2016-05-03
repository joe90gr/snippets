import express from 'express';
import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';
import contentService from 'services/contentService';

var router = express.Router();

router.get('*', function (req, res, next) {
	var path = req.path.substr(1) === '' ? 'index' : req.path.substr(1);
	var data = contentService(path);

	RoutingAction.navigateInternal(path);
	ContentAction.createPage(path);

	res.render('index', { title: data.title, model: data.content });
});

export default router;

import express from 'express';
import NavigateAction from 'actions/NavigateActionCreator';

var router = express.Router();

router.get('*', function (req, res, next) {
	var path = req.path.substr(1) === '' ? 'index' : req.path.substr(1);

	NavigateAction.navigateTo(path);

	res.render('index');
});

export default router;

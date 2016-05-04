import express from 'express';
import { useStore } from 'src/storeRegistry';
import NavigateAction from 'actions/NavigateAction';

var router = express.Router();

router.get('*', function (req, res, next) {
	var path = req.path.substr(1) === '' ? 'index' : req.path.substr(1);

	NavigateAction.navigateTo(path);

	res.render('index');
});

export default router;

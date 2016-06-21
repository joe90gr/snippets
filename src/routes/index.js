import express from 'express';
import NavigateAction from 'actions/NavigateActionCreator';
import UserAction from 'actions/UserAction';

var router = express.Router();

router.post('/login', UserAction.authenticateUser);
router.get('/logout', UserAction.invalidateUser);

router.get('*', function (req, res) {
	var path = req.path.substr(1) === '' ? 'index' : req.path.substr(1);

	UserAction.initiateUser(req, res);
	NavigateAction.navigateTo(path);

	res.render('index');
});

export default router;

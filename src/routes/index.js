import express from 'express';
import NavigateAction from 'actions/NavigateActionCreator';
import UserAction from 'actions/UserAction';

var router = express.Router();

function checkUserSessionValid(req, res) {
	if (!req.session.isAuthenticated) {
		req.overide = true;
		UserAction.invalidateUser(req, res);
	}
}

router.post('/login', UserAction.authenticateUser);
router.get('/logout', UserAction.invalidateUser);

router.get('*', function (req, res) {
	var path = req.path.substr(1) === '' ? 'index' : req.path.substr(1);

	checkUserSessionValid(req);
	UserAction.initiateUser(req.session.user);
	NavigateAction.navigateTo(path);

	res.render('index');
});

export default router;

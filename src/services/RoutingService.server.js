import routes from 'configuration/routes';
import UserAction from 'actions/UserAction';
import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';

class RoutingService {
	constructor(expressRouter) {
		Object.keys(routes).forEach((route) => {
			expressRouter.get(route, this._handleRoute);
		});
	}

	_handleRoute(req, res) {
		const path = req.path.substr(1);

		UserAction.initiateUser(req, res);
		RoutingAction.routeTo(path);
		ContentAction.createPage(path);

		res.render('index');
	}

	exec() {}
}

export default RoutingService;

import { getUrlSuffix } from 'utils/utilFunctions';
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
		UserAction.initiateUser(req, res);
		RoutingAction.routeTo(req.path);
		ContentAction.createPage(routes[getUrlSuffix(req.path)].page);

		res.render('Index');
	}

	exec() {}
}

export default RoutingService;

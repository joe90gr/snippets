import { getUrlSuffix } from 'utils/utilFunctions';
import routes from 'configuration/routes';
import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';

class RoutingService {
	constructor(director) {
		this._bindEvents = { routes: routes };

		Object.keys(routes).forEach((route) => {
			const callback = new this._handleRoute(route);

			this._bindEvents[route] = callback.fn;
		});

		delete this._bindEvents.routes;

		this._router = new director.Router(this._bindEvents).configure({ html5history: true });
		this._router.init();
	}

	_handleRoute(path) {
		const { id, external } = routes[path];

		this.fn = () => {
			RoutingAction.routeTo({ path, id, external });
			ContentAction.createPage(routes[getUrlSuffix(path)].page);
		};
	}

	exec(route) {
		this._router.setRoute(route);
	}
}

RoutingService.serviceName = 'RoutingService';

export default RoutingService;

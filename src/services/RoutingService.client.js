import director from 'director';
import routes from 'configuration/routes';
import RoutingAction from 'actions/RoutingAction';
import ContentAction from 'actions/ContentAction';

class RoutingService {
	constructor() {
		this._bindEvents = { routes: routes };

		for (let route in routes) {
			if (routes.hasOwnProperty(route)) {
				let _route = route === 'index' ? '' : route;
				let callback = new this.CallbackObj(route);
				this._bindEvents[_route] = callback.fn;
			}
		}
		delete this._bindEvents.routes;

		this._router = new director.Router(this._bindEvents).configure({ html5history: true });
		this._router.init();
	}

	CallbackObj(_route) {
		this.fn = () => {
			RoutingAction.routeTo(_route);
			ContentAction.createPage(_route);
		};
	}

	bindRoutingActions() {}

	getRouter() {
		return this._router;
	}
}

export default RoutingService;

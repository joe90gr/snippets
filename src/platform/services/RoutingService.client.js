import { resolveDeepPages, transformPathValueWithKeys, transformKeyToPath } from 'utils/utilFunctions';
import routes from 'platform/configuration/routes';
import RoutingAction from 'platform/actions/RoutingAction';
import ContentAction from 'platform/actions/ContentAction';

class RoutingService {
	constructor(director) {
		this._bindEvents = { routes: routes };

		Object.keys(routes).forEach((route) => {
			const { method, pages, page, action } = routes[route];

			if (pages || page) {
				const callback = new this._handleRoute(route);

				this._bindEvents[route] = callback.fn;
			} else if (!action) {
				console.log('server 404 and 500', method);
			}
		});

		delete this._bindEvents.routes;

		this._router = new director.Router(this._bindEvents).configure({ html5history: true });
		this._router.init();
	}

	_handleRoute(path) {
		this.fn = (...params) => {
			const _path= transformKeyToPath(path, params);
			const keyValueParams = transformPathValueWithKeys(path, params);
			const { page, id } = resolveDeepPages(routes, path, keyValueParams);

			RoutingAction.routeTo({
				id,
				path: _path,
				pathSigniture: path,
				params: keyValueParams
			});
			ContentAction.createPage(page);
		};
	}

	exec(route) {
		this._router.setRoute(route);
	}
}

RoutingService.serviceName = 'RoutingService';

export default RoutingService;

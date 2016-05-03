import routingConstants from 'constants/RoutingConstants';
import router from 'services/routingService';
import AbstractStore from './AbstractStore';

class RoutingStore extends AbstractStore {
	constructor() {
		var route;

		super();

		try {
			route = window.SERIALIZED_STORE_CACHE[this.storeName].route;
		} catch (e) {

		}

		this._route = route;
	}

	getRoute() {
		return this._route;
	}

	_setRoute(route) {
		this._route = route;
	}

	serialize() {
		return {
			route: this.getRoute()
		};
	}

	_dispatch(action) {
		console.log('whats the store route', this._route);
		switch (action.actionType) {
			case routingConstants.NAVIGATE_INTERNAL:
				this._setRoute(action.data);
				if (router.setRoute) {
					router.setRoute(action.data);
				}
				this.emitChange(action.data);
				break;
			default:
				console.log('Route none found');
		}
	}
}

export default RoutingStore;

import routingConstants from 'constants/RoutingConstants';
import AbstractStore from './AbstractStore';

class RoutingStore extends AbstractStore {
	constructor(deserializedState) {
		super();

		this._route = deserializedState.route || '';
	}

	route() {
		return this._route;
	}

	_setRoute(route) {
		this._route = route;
	}

	serialize() {
		return {
			route: this.route()
		};
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case routingConstants.NAVIGATE_INTERNAL:
				this._setRoute(action.data);
				this.emitChange(action.data);
				break;
			default:
				console.log('Route none found');
		}
	}
}

export default RoutingStore;

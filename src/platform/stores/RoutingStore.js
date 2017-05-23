import routingConstants from 'platform/constants/RoutingConstants';
import AbstractStore from './AbstractStore';

class RoutingStore extends AbstractStore {
	constructor(deserializedState) {
		super();

		this._route = deserializedState.route || { id: '' };
	}

	_setRoute(route) {
		this._route = route;
	}

	getState() {
		return {
			route: this._route
		};
	}

	serialize() {
		return { route: this._route };
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

RoutingStore.storeName = 'routingStore';

export default RoutingStore;

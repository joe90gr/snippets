import routingConstants from '../constants/RoutingConstants';
import router from '../services/routingService';
import AbstractStore from './AbstractStore';

class RoutingStore extends AbstractStore {
	constructor() {
		super();
		this.CHANGE_EVENT = 'routing-change';
		this.dispatchToken = this._dispatchToken();
	}

	getRoute() {
		return this._data;
	}

	_setRoute(data) {
		this._data = data;
	}

	_dispatchToken() {
		return this.dispatcher.register((action) => {
			switch (action.actionType) {
				case routingConstants.NAVIGATE_INTERNAL:
					this._setRoute(action.data);
					router.setRoute(action.data);
					this.emitChange(action.data);
					break;
				default:
					console.log('Route none found');
			}
		});
	}
}

export default new RoutingStore();

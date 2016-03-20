import Dispatcher from '../utils/Dispatcher';
import routingConstants from '../constants/RoutingConstants';
import router from '../services/routingService';
import AbstractStore from './AbstractStore';

class RoutingStore extends AbstractStore {
	constructor() {
		super();
		this.CHANGE_EVENT = 'routing-change';
		this.dispatchToken = this._dispatchToken();
	}

	setRoute(data) {
		this._data = data;
	}

	_dispatchToken() {
		return Dispatcher.register((action) => {
			switch (action.actionType) {
				case routingConstants.NAVIGATE_INTERNAL:
					this.setRoute(action.data);
					router.setRoute(action.data);
					this.emitChange(action.data);
					break;
				default:
					console.log('Route none found');
			}
		});
	}
}

export default RoutingStore;

import Dispatcher from '../utils/Dispatcher';
import contentConstants from '../constants/ContentConstants';
import contentService from '../services/contentService';
import AbstractStore from './AbstractStore';
import RoutingStore from './RoutingStore';

var routingStore = new RoutingStore();

class ContentStore extends AbstractStore {
	constructor() {
		super();
		this.CHANGE_EVENT = 'content-change';
		this.dispatchToken = this._dispatchToken();
	}

	createPageContent(data) {
		this._data = contentService(data);
	}

	_dispatchToken() {
		Dispatcher.register((action) => {
			switch (action.actionType) {
				case contentConstants.CREATE_PAGE:
					Dispatcher.waitFor([ routingStore.dispatchToken ]);
					this.createPageContent(action.data);
					this.emitChange();
					break;
				default:
					console.log('Content none found');
			}
		});
	}
}

export default ContentStore;

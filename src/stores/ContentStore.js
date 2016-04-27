import contentConstants from 'constants/ContentConstants';
import contentService from 'services/contentService';
import AbstractStore from './AbstractStore';

class ContentStore extends AbstractStore {
	constructor() {
		super();
		this.use = [ 'RoutingStore' ];
	}

	getPageContent() {
		return this._data;
	}

	_createPageContent(data) {
		this._data = contentService(data);
	}

	_dispatch(action) {
		switch (action.actionType) {
			case contentConstants.CREATE_PAGE:
				this.dispatcher.waitFor([ this.RoutingStore.dispatchToken ]);
				this._createPageContent(action.data);
				this.emitChange();
				break;
			default:
				console.log('Content none found');
		}
	}
}

export default ContentStore;

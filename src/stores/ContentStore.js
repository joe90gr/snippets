import contentConstants from 'constants/ContentConstants';
import AbstractStore from './AbstractStore';

class ContentStore extends AbstractStore {
	constructor(deserializedState) {
		super();
		this.use = [ 'routingStore' ];

		this._page = deserializedState.page || { contentType: '', baseLayout: '', key: '' };
	}

	page() {
		return this._page;
	}

	_setPageContent(page) {
		this._page = page;
	}

	serialize() {
		return { page: this._page };
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case contentConstants.CREATE_PAGE:
				this.dispatcher.waitFor([ this.routingStore.dispatchToken ]);
				this._setPageContent(action.data);
				this.emitChange();
				break;
			default:
				console.log('Content none found');
		}
	}
}

ContentStore.storeName = 'contentStore';

export default ContentStore;

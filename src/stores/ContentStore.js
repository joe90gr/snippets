import contentConstants from 'constants/ContentConstants';
import contentService from 'services/contentService';
import AbstractStore from './AbstractStore';

class ContentStore extends AbstractStore {
	constructor() {
		var content;
		super();
		this.use = [ 'routingStore' ];

		try {
			console.log('whats in the content', window.SERIALIZED_STORE_CACHE[this.storeName].content.title, content);
			content = window.SERIALIZED_STORE_CACHE[this.storeName].content;
		} catch (e) {

		}

		this._data = content;
	}

	getPageContent() {
		return this._data;
	}

	_createPageContent(data) {
		this._data = contentService(data);
	}

	serialize() {
		return {
			content: this.getPageContent()
		};
	}

	_dispatch(action) {
		switch (action.actionType) {
			case contentConstants.CREATE_PAGE:
				this.dispatcher.waitFor([ this.routingStore.dispatchToken ]);
				this._createPageContent(action.data);
				this.emitChange();
				break;
			default:
				console.log('Content none found');
		}
	}
}

export default ContentStore;

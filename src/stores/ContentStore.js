import contentConstants from 'constants/ContentConstants';
import AbstractStore from './AbstractStore';

class ContentStore extends AbstractStore {
	constructor() {
		var content;
		super();
		this.use = [ 'routingStore' ];

		try {
			console.log('whats in the content', window.SERIALIZED_STORE_CACHE[this.storeName].content.title, content);
			content = window.SERIALIZED_STORE_CACHE[this.storeName].content;
			content.content = content.content.filter((element) => element !== null);
		} catch (e) {

		}

		this._content = content;
	}

	getPageContent() {
		return this._content;
	}

	_createPageContent(content) {
		this._content = content;
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

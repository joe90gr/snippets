import contentConstants from 'constants/ContentConstants';
import AbstractStore from './AbstractStore';
import contentRepository from 'common/contentRepository';

class ContentStore extends AbstractStore {
	constructor(deserializedState) {
		super();
		this.use = [ 'routingStore' ];

		this._page = deserializedState.page || { title: '', type: '', baseLayout: '', key: '' };
	}

	page() {
		const { title, key, type, baseLayout } = this._page;
		let page = { title, type, baseLayout };

		if (type === 'component') {
			// component rendering
		} else {
			page.content = contentRepository[type][key];
		}

		return page;
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

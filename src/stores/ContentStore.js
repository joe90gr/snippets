import contentConstants from 'constants/ContentConstants';
import AbstractStore from './AbstractStore';
import contentRepository from 'common/contentRepository';

class ContentStore extends AbstractStore {
	constructor(deserializedState) {
		super();
		this.use = [ 'routingStore' ];

		this._content = deserializedState.page || { title: '', content: [] };
	}

	page() {
		let { title, content } = this._content;
		let page = { title: title, content: [] };

		content.forEach((content, index) => {
			const contentType = this.routingStore.routes()[this.routingStore.route()].contentType;

			page.content[index] = contentRepository[contentType][content];
		});

		return page;
	}

	_setPageContent(content) {
		this._content = content;
	}

	serialize() {
		return { page: this._content };
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

export default ContentStore;

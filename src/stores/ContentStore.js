import contentConstants from 'constants/ContentConstants';
import AbstractStore from './AbstractStore';
import snippets from 'common/snippets';

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
			page.content[index] = snippets[content];
		});

		return page;
	}

	_setPageContent(content) {
		this._content = content;
	}

	_getUrlSuffix(data) {
		var arr= data.split('/');

		return `/${arr[arr.length - 1]}`;
	}

	serialize() {
		return { page: this._content };
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case contentConstants.CREATE_PAGE:
				this.dispatcher.waitFor([ this.routingStore.dispatchToken ]);
				this._setPageContent(this.routingStore.routes()[this._getUrlSuffix(action.data)]);
				this.emitChange();
				break;
			default:
				console.log('Content none found');
		}
	}
}

export default ContentStore;

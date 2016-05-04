import contentConstants from 'constants/ContentConstants';
import AbstractStore from './AbstractStore';

class ContentStore extends AbstractStore {
	constructor(deserializedState) {
		super();
		this.use = [ 'routingStore' ];

		this._content = deserializedState.content || { title: '', content: [] };
		this._content.content = this._content.content.filter((element) => element !== null);
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

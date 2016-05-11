import contentConstants from 'constants/ContentConstants';
import AbstractStore from './AbstractStore';
import routes from 'configuration/routes';

class ContentStore extends AbstractStore {
	constructor(deserializedState) {
		super();
		this.use = [ 'routingStore' ];

		this._content = deserializedState.page || { title: '', content: [] };
	}

	getPageContent() {
		return this._content;
	}

	_createPageContent(content) {
		this._content = content;
	}

	serialize() {
		return { page: this._content };
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case contentConstants.CREATE_PAGE:
				this.dispatcher.waitFor([ this.routingStore.dispatchToken ]);
				this._createPageContent(routes[action.data]);
				this.emitChange();
				break;
			default:
				console.log('Content none found');
		}
	}
}

export default ContentStore;

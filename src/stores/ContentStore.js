import contentConstants from 'constants/ContentConstants';
import contentService from 'services/contentService';
import AbstractStore from './AbstractStore';
import { useStore } from '../storeRegistry';

class ContentStore extends AbstractStore {
	constructor() {
		super();
		this.routingStore = useStore('RoutingStore');
	}

	getPageContent() {
		return this._data;
	}

	_createPageContent(data) {
		this._data = contentService(data);
	}

	_dispatchToken() {
		return this.dispatcher.register((action) => {
			switch (action.actionType) {
				case contentConstants.CREATE_PAGE:
					this.dispatcher.waitFor([ this.routingStore.dispatchToken ]);
					this._createPageContent(action.data);
					this.emitChange();
					break;
				default:
					console.log('Content none found');
			}
		});
	}
}

export default ContentStore;

import AbstractStore from './AbstractStore';
import { serialize } from 'src/registry';

class DocumentMetaDataStore extends AbstractStore {
	constructor() {
		super();
		this.use = [ 'routingStore' ];
	}

	pageTitle() {
		return this.routingStore.route().id;
	}

	styleSheetPath() {
		return '/styles/style.css';
	}

	serialisedScripts() {
		return JSON.stringify(serialize());
	}

	_onDispatch() {
		this.emitChange();
	}
}

DocumentMetaDataStore.storeName = 'documentMetaDataStore';

export default DocumentMetaDataStore;

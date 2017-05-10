import AbstractStore from './AbstractStore';
import { serialize } from 'utils/registry';

class DocumentMetaDataStore extends AbstractStore {
	constructor() {
		super();
		this.use = [ 'routingStore' ];
	}

	getState() {
		return {
			pageTitle: this.routingStore.getState().route.id,
			styleSheetPath: '/styles/style.css',
			serialisedScripts: JSON.stringify(serialize())
		};
	}

	_onDispatch() {
		this.emitChange();
	}
}

DocumentMetaDataStore.storeName = 'documentMetaDataStore';

export default DocumentMetaDataStore;

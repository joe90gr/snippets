import AbstractStore from './AbstractStore';
import { serialize } from 'src/storeRegistry';

class DocumentMetaDataStore extends AbstractStore {
	constructor() {
		super();
		this.use = [ 'routingStore' ];
	}

	getTitle() {
		return this.routingStore.getRoute();
	}

	getStyleSheetPath() {
		return '/styles/style.css';
	}

	getScripts() {
		return '';
	}

	getSerialisedScripts() {
		return JSON.stringify(serialize());
	}

	getMetaData() {

	}

	_onDispatch() {}
}

export default DocumentMetaDataStore;

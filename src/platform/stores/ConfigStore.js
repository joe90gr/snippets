import AbstractStore from './AbstractStore';

class ConfigStore extends AbstractStore {
	constructor(deserializedState) {
		super();

		this._config = {};
	}

	getState() {
		return { config: this._config };
	}

	_onDispatch(action) {
		switch (action.actionType) {
			case 'LOAD_CONFIG':
				this._config = action.data;
				break;
			default:
				console.log('Config none found');
		}
	}
}

ConfigStore.storeName = 'configStore';

export default ConfigStore;

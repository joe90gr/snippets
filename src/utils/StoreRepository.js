import Dispatcher from 'utils/Dispatcher';

class StoreRepository {
	constructor() {
		this.stores = {};
		this.dispatcher = Dispatcher;
	}

	register(Store) {
		let store = new Store();

		store.dispatcher = Dispatcher;
		store.dispatchToken = this._registerDispatcher(store);
		this.stores[Store.name] = store;

		return this;
	}

	_registerDispatcher(store) {
		return store.dispatcher.register((action) => {
			store._dispatch(action);
		});
	}

	getStore(storeName) {
		return this.stores[storeName];
	}

	bindStoreUsages() {
		for (let _store in this.stores) {
			if (this.stores.hasOwnProperty(_store) && this.stores[_store].use) {
				this.stores[_store].use.forEach((store) => {
					this.stores[_store][store] = this.getStore(store);
				});
			}
		}
	}
}

export default new StoreRepository();

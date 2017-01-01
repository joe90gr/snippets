import Dispatcher from 'utils/Dispatcher';
import { deCapitalise } from 'utils/utilFunctions';

class StoreRepository {
	constructor() {
		this.stores = {};
		this.dispatcher = Dispatcher;
	}

	register(Store) {
		const storeName = deCapitalise(Store.name);

		let deserializedState;

		try {
			deserializedState = window.SERIALIZED_STORE_CACHE[storeName];
		} catch (e) {
			deserializedState = {};
		}

		let store = new Store(deserializedState);

		store.dispatcher = Dispatcher;
		store.dispatchToken = this._registerDispatcher(store, Store.name);
		this.stores[storeName] = store;

		return this;
	}

	_registerDispatcher(store, name) {
		return store.dispatcher.register((action) => {
			if (store._onDispatch) {
				store._onDispatch(action);
			} else {
				throw new Error(`The store ${name} must implement and _onDispatch method`);
			}
		});
	}

	getStore(storeName) {
		return this.stores[storeName];
	}

	getRegisteredStores() {
		return this.stores;
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

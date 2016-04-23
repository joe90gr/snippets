class StoreRepository {
	constructor() {
		this.stores = {};
	}

	register(Store) {
		let store = new Store();

		store.CHANGE_EVENT = Store.name + 'change';
		store.dispatchToken = store._dispatchToken();
		this.stores[Store.name] = store;

		return this;
	}

	getStore(storeName) {
		return this.stores[storeName];
	}
}

export default new StoreRepository();

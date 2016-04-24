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

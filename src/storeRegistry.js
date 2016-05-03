import storeRepository from 'utils/StoreRepository';

import DocumentMetaDataStore from 'stores/DocumentMetaDataStore';
import RoutingStore from 'stores/RoutingStore';
import ContentStore from 'stores/ContentStore';

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(ContentStore)
	.bindStoreUsages();

export function useStore(storeName) {
	return storeRepository.getStore(storeName);
}

export function serialize() {
	var _stores = storeRepository.getRegisteredStores();

	return Object.keys(_stores).reduce((serialized, storeName) => {
		var _store = _stores[storeName];

		if (_store && _store.serialize) {
			serialized[storeName] = _store.serialize();
		} else {
			serialized[storeName] = 'null';
		}

		return serialized;
	}, {});
}

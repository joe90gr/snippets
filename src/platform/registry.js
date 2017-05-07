import storeRepository from 'utils/StoreRepository';
import serviceRepository from 'utils/ServiceRepository';

export function useStore(storeName) {
	return storeRepository.getStore(storeName);
}

export function useService(serviceName) {
	return serviceRepository.getService(serviceName);
}

export function serialize() {
	var _stores = storeRepository.getRegisteredStores();

	return Object.keys(_stores).reduce((serialized, storeName) => {
		var _store = _stores[storeName];

		if (_store && _store.serialize) {
			serialized[storeName] = _store.serialize();
		}

		return serialized;
	}, {});
}

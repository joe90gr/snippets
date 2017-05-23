import storeRepository from 'utils/StoreRepository';

import ConfigStore from 'platform/stores/ConfigStore';
import DocumentMetaDataStore from 'platform/stores/DocumentMetaDataStore';
import RoutingStore from 'platform/stores/RoutingStore';
import ContentStore from 'platform/stores/ContentStore';
import UserSessionStore from 'platform/stores/UserSessionStore';

export default function () {
	storeRepository
		.register(ConfigStore)
		.register(DocumentMetaDataStore)
		.register(RoutingStore)
		.register(ContentStore)
		.register(UserSessionStore)
		.bindStoreUsages();
}


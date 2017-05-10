import storeRepository from 'utils/StoreRepository';

import DocumentMetaDataStore from 'platform/stores/DocumentMetaDataStore';
import RoutingStore from 'platform/stores/RoutingStore';
import ContentStore from 'platform/stores/ContentStore';
import UserSessionStore from 'platform/stores/UserSessionStore';

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(ContentStore)
	.register(UserSessionStore)
	.bindStoreUsages();

import storeRepository from 'utils/StoreRepository';

import DocumentMetaDataStore from 'stores/DocumentMetaDataStore';
import RoutingStore from 'stores/RoutingStore';
import LocationStore from 'stores/LocationStore';
import ContentStore from 'stores/ContentStore';
import UserSessionStore from 'stores/UserSessionStore';

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(LocationStore)
	.register(ContentStore)
	.register(UserSessionStore)
	.bindStoreUsages();

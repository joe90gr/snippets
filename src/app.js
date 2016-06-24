import serviceRepository from 'utils/ServiceRepository';
import storeRepository from 'utils/StoreRepository';

import RoutingService from 'services/RoutingService.server';
import SessionService from 'services/SessionService.server';

import DocumentMetaDataStore from 'stores/DocumentMetaDataStore';
import RoutingStore from 'stores/RoutingStore';
import ContentStore from 'stores/ContentStore';
import UserSessionStore from 'stores/UserSessionStore';
import app from './middleware';

serviceRepository
	.register(RoutingService)
	.register(SessionService);

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(ContentStore)
	.register(UserSessionStore)
	.bindStoreUsages();

module.exports = app();

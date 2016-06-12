import serviceRepository from 'utils/ServiceRepository';
import storeRepository from 'utils/StoreRepository';

import { loginRequest, logoutRequest } from 'services/sessionService.server';

import DocumentMetaDataStore from 'stores/DocumentMetaDataStore';
import RoutingStore from 'stores/RoutingStore';
import ContentStore from 'stores/ContentStore';
import UserSessionStore from 'stores/UserSessionStore';
import app from './middleware';

serviceRepository
	.register(loginRequest)
	.register(logoutRequest);

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(ContentStore)
	.register(UserSessionStore)
	.bindStoreUsages();

module.exports = app();

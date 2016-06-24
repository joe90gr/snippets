import React from 'react';
import ReactDOM from 'react-dom';
import ReactWrapper from 'views/ReactWrapper';
import serviceRepository from 'utils/ServiceRepository';
import storeRepository from 'utils/StoreRepository';

import RoutingService from 'services/RoutingService.client';
import SessionService from 'services/SessionService.client';

import DocumentMetaDataStore from 'stores/DocumentMetaDataStore';
import RoutingStore from 'stores/RoutingStore';
import ContentStore from 'stores/ContentStore';
import UserSessionStore from 'stores/UserSessionStore';

serviceRepository
	.register(RoutingService)
	.register(SessionService);

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(ContentStore)
	.register(UserSessionStore)
	.bindStoreUsages();

ReactDOM.render(<ReactWrapper />, document.getElementsByClassName('react-wrapper')[0]);

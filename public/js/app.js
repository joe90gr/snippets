import React from 'react';
import ReactDOM from 'react-dom';
import ReactWrapper from 'views/ReactWrapper';
import serviceRepository from 'utils/ServiceRepository';
import storeRepository from 'utils/StoreRepository';

import { loginRequest, logoutRequest } from 'services/sessionService.client';

import DocumentMetaDataStore from 'stores/DocumentMetaDataStore';
import RoutingStore from 'stores/RoutingStore';
import ContentStore from 'stores/ContentStore';
import UserSessionStore from 'stores/UserSessionStore';

serviceRepository
	.register(loginRequest)
	.register(logoutRequest);

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(ContentStore)
	.register(UserSessionStore)
	.bindStoreUsages();

ReactDOM.render(<ReactWrapper />, document.getElementsByClassName('react-wrapper')[0]);

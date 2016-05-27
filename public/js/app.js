import React from 'react';
import ReactDOM from 'react-dom';
import ReactWrapper from 'views/ReactWrapper';
import storeRepository from 'utils/StoreRepository';

import DocumentMetaDataStore from 'stores/DocumentMetaDataStore';
import RoutingStore from 'stores/RoutingStore';
import ContentStore from 'stores/ContentStore';
import UserSessionStore from 'stores/UserSessionStore';

storeRepository
	.register(DocumentMetaDataStore)
	.register(RoutingStore)
	.register(ContentStore)
	.register(UserSessionStore)
	.bindStoreUsages();

ReactDOM.render(<ReactWrapper />, document.getElementsByClassName('react-wrapper')[0]);

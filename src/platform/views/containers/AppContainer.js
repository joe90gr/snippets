import { compose } from 'recompose';

import SubscribeToStores from 'platform/views/viewControllers/SubscribeToStores';

import ReactWrapper from 'platform/views/components/ReactWrapper';

export const storeStubs = {
	configStore: [ 'config' ],
	userSessionStore: [ 'user', 'errors' ],
	routingStore: [ 'route' ],
	contentStore: [ 'page' ]
};

export default compose(SubscribeToStores)(ReactWrapper, storeStubs);


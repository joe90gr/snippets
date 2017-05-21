import { compose } from 'recompose';

import SubscribeToStores from 'platform/views/viewControllers/SubscribeToStores';

import ReactWrapper from 'platform/views/components/ReactWrapper';

export const storeStubs = {
	userSessionStore: [ 'user', 'errors' ],
	routingStore: [ 'route', 'routes' ],
	contentStore: [ 'page' ]
};

export default compose(SubscribeToStores)(ReactWrapper, storeStubs);


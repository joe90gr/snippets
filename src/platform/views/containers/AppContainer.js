import { compose, lifecycle } from 'recompose';

import SubscribeToStores from 'platform/views/viewControllers/SubscribeToStores';

import InitializerAction from 'platform/actions/InitializeAction';
import ReactWrapper from 'platform/views/components/ReactWrapper';

const spec = {
	componentWillMount: function () {
		InitializerAction.loadConfig();
	}
};

export const storeStubs = {
	configStore: [ 'config' ],
	userSessionStore: [ 'user', 'errors' ],
	routingStore: [ 'route' ],
	contentStore: [ 'page' ]
};

export default compose(
	lifecycle(spec),
	SubscribeToStores
)(ReactWrapper, storeStubs);


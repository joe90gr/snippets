import React from 'react';
import assign from 'object-assign';
import { hyphenate } from 'utils/utilFunctions';

import SubscribeToStores from 'views/viewControllers/SubscribeToStores';

import Layouts from './templates/Layouts';

function ReactWrapper(props) {
	const { page } = props;
	const _props = assign({}, props, { layoutClass: hyphenate(page.layout) });

	return (React.createElement(Layouts[page.layout], _props));
}

ReactWrapper.displayName = 'reactWrapper';
ReactWrapper.propTypes = {
	route: React.PropTypes.object,
	page: React.PropTypes.object
};

export default SubscribeToStores(ReactWrapper, {
	userSessionStore: [ 'user', 'errors' ],
	routingStore: [ 'route', 'routes' ],
	contentStore: [ 'page' ]
});

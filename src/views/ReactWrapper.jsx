import React from 'react';
import assign from 'object-assign';
import { hyphenate } from 'utils/utilFunctions';

import SubscribeToStores from 'views/viewControllers/SubscribeToStores';

import Layouts from './templates/Layouts';

class ReactWrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { route, routes } = this.props;
		const { page: { layout } } = routes[route];
		const props = assign({}, this.props, { layoutClass: hyphenate(layout) });

		return (
			<div id={ routes[route].id } className="react-wrapper">
				{ React.createElement(Layouts[layout], props) }
			</div>
		);
	}
}

ReactWrapper.displayName = 'reactWrapper';

ReactWrapper.propTypes = {
	route: React.PropTypes.string,
	routes: React.PropTypes.object
};

export default SubscribeToStores(ReactWrapper, {
	userSessionStore: [ 'user', 'errors' ],
	routingStore: [ 'route', 'routes' ],
	contentStore: [ 'page' ]
});

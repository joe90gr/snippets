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
		const { route, page } = this.props;
		const props = assign({}, this.props, { layoutClass: hyphenate(page.layout) });

		return (
			<div id={ route.id } className="react-wrapper">
				{ React.createElement(Layouts[page.layout], props) }
			</div>
		);
	}
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

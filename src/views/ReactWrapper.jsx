import React from 'react';

import SubscribeToStores from 'utils/SubscribeToStores';

import LeftNavLayout from './templates/LeftNavLayout';

class ReactWrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { route } = this.props;

		return (
			<div id={ route } className="react-wrapper">
				<LeftNavLayout { ...this.props } />
			</div>
		);
	}
}

ReactWrapper.displayName = 'reactWrapper';

ReactWrapper.propTypes = {
	route: React.PropTypes.string
};

export default SubscribeToStores(ReactWrapper, {
	userSessionStore: [ 'user', 'errors' ],
	routingStore: [ 'route', 'routes' ],
	contentStore: [ 'page' ]
});

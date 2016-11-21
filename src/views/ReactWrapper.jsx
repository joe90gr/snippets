import React from 'react';

import SubscribeToStores from 'utils/SubscribeToStores';

import LeftNavLayout from './templates/LeftNavLayout';

class ReactWrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { routingStore, contentStore, userSessionStore } = this.props;

		return (
			<div id={ routingStore.route } className="react-wrapper">
				<LeftNavLayout
					routingStore={ routingStore }
					contentStore={ contentStore }
					userSessionStore={ userSessionStore }
				/>
			</div>
		);
	}
}

ReactWrapper.displayName = 'reactWrapper';

ReactWrapper.propTypes = {
	userSessionStore: React.PropTypes.object,
	routingStore: React.PropTypes.object,
	contentStore: React.PropTypes.object
};

export default SubscribeToStores(ReactWrapper, {
	userSessionStore: [ 'user', 'errors' ],
	routingStore: [ 'route', 'routes' ],
	contentStore: [ 'page' ]
});

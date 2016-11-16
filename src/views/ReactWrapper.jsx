import React from 'react';

import SubscribeToStores from 'utils/SubscribeToStores';

import LeftNav from './templates/LeftNav';

class ReactWrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { contentStore, userSessionStore } = this.props;

		return (
			<div className="react-wrapper">
				<LeftNav contentStore={ contentStore } userSessionStore={ userSessionStore } />
			</div>
		);
	}
}

ReactWrapper.displayName = 'reactWrapper';

ReactWrapper.propTypes = {
	userSessionStore: React.PropTypes.object,
	contentStore: React.PropTypes.object
};

export default SubscribeToStores(ReactWrapper, {
	userSessionStore: [ 'user', 'errors' ],
	contentStore: [ 'page' ]
});

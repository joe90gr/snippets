import React from 'react';
import SubscribeToStores from 'utils/SubscribeToStores';

class AccessControl extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, loggedIn, userSessionStore } = this.props;

		if (userSessionStore.isAuthenticated === loggedIn) {
			return children;
		}

		return null;
	}
}

AccessControl.displayName = 'AccessControl';

AccessControl.propTypes = {
	children: React.PropTypes.object,
	loggedIn: React.PropTypes.bool,
	userSessionStore: React.PropTypes.object
};

export default SubscribeToStores(AccessControl, {
	userSessionStore: [ 'isAuthenticated' ]
});

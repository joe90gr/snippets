import React from 'react';
import SubscribeToStores from 'utils/SubscribeToStores';

class AccessControl extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, loggedIn, isAuthenticated } = this.props;

		if (isAuthenticated === loggedIn) {
			return children;
		}

		return null;
	}
}

AccessControl.displayName = 'AccessControl';

AccessControl.propTypes = {
	children: React.PropTypes.object,
	loggedIn: React.PropTypes.bool,
	isAuthenticated: React.PropTypes.bool
};

export default SubscribeToStores(AccessControl, {
	userSessionStore: [ 'isAuthenticated' ]
});

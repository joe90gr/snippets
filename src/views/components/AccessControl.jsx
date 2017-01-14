import React from 'react';
import SubscribeToStores from 'views/viewControllers/SubscribeToStores';

function AccessControl({ children, loggedIn, isAuthenticated }) {
	if (isAuthenticated === loggedIn) {
		return children;
	}

	return null;
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

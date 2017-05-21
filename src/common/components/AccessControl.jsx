import React from 'react';
import { bool, object } from 'prop-types';

import SubscribeToStores from 'platform/views/viewControllers/SubscribeToStores';

function AccessControl({ children, loggedIn, isAuthenticated }) {
	if (isAuthenticated === loggedIn) {
		return children;
	}

	return null;
}

AccessControl.displayName = 'AccessControl';
AccessControl.propTypes = {
	children: object,
	loggedIn: bool,
	isAuthenticated: bool
};

export default SubscribeToStores(AccessControl, {
	userSessionStore: [ 'isAuthenticated' ]
});

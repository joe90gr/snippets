import React from 'react';
import SubscribeToStores from 'utils/SubscribeToStores';

const storeManifest = {
	userSessionStore: [ 'isAuthenticated' ]
};

export default SubscribeToStores(React.createClass({
	displayName: 'AccessControl',

	propTypes: {
		children: React.PropTypes.object,
		loggedIn: React.PropTypes.bool,
		userSessionStore: React.PropTypes.object
	},

	render: function () {
		const { children, loggedIn, userSessionStore } = this.props;

		if (userSessionStore.isAuthenticated === loggedIn) {
			return children;
		}

		return null;
	}
}), storeManifest);

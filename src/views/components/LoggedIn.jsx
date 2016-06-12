import React from 'react';

import { use } from 'mixins/use';

export default React.createClass({
	displayName: 'LoggedIn',

	propTypes: { children: React.PropTypes.object },

	mixins: [ use('userSessionStore') ],

	getInitialState: function () {
		return { 'isAuthenticated': this.userSessionStore.isAuthenticated() };
	},

	render: function () {
		if (this.state.isAuthenticated) {
			return this.props.children;
		}

		return null;
	},

	_onUserSessionStoreChange: function () {
		this.setState({ isAuthenticated: this.userSessionStore.isAuthenticated() });
	}
});

import React from 'react';
import router from 'services/routingService';

export default React.createClass({
	displayName: 'Link',

	PropTypes: {
		name: React.PropTypes.string,
		location: React.PropTypes.string
	},

	render: function () {
		return (
			<a href={ this.props.location } onClick={ this.clickFunction }> { this.props.name } </a>
		);
	},

	clickFunction: function (e) {
		e.preventDefault();
		router.setRoute(e.target.getAttribute('href'));
	}
});

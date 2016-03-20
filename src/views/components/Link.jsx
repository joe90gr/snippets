import React from 'react';
import RoutingAction from '../../actions/RoutingAction';

export default React.createClass({
	displayName: 'Link',

	PropTypes: {
		name: React.PropTypes.string,
		location: React.PropTypes.string
	},

	render: function () {
		return (
			<a href={this.props.location} onClick={this.clickFunction}> {this.props.name} </a>
		);
	},

	clickFunction: function (e) {
		e.preventDefault();
		RoutingAction.navigateInternal(e.target.parentNode.getAttribute('href'));
	}
});

import React from 'react';

export default React.createClass({
	displayName: 'Head',

	propTypes: {
		title: React.PropTypes.string
	},

	render: function () {
		return (
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="/styles/style.css" />
			</head>
		);
	}
});

import React from 'react';
import ReactWrapper from '../ReactWrapper';

export default React.createClass({
	displayName: 'mainContainer',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	render: function () {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/styles/style.css" />
				</head>
				<body>
					<ReactWrapper title={this.props.title} model={this.props.model}/>
					<script type="text/javascript" src="/js/main.js" />
				</body>
			</html>
		);
	}
});

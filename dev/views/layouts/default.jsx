var React = require('react');

var DefaultLayout = React.createClass({
	displayName: 'mainContainer',

	render: function () {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/stylesheets/style.css" />
				</head>
				<body>
					{this.props.children}
					<script type="text/javascript" src="/javascripts/main.js" />
				</body>
			</html>
		);
	}
});

module.exports = DefaultLayout;


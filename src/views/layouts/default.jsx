var React = require('react');

var DefaultLayout = React.createClass({
	displayName: 'mainContainer',

	render: function () {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/styles/style.css" />
				</head>
				<body>
					{this.props.children}
					<script type="text/javascript" src="/js/main.js" />
				</body>
			</html>
		);
	}
});

module.exports = DefaultLayout;


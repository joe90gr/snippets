import React from 'react';

export default React.createClass({
	displayName: 'Error',

	render: function () {
		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<link rel="stylesheet" href="/styles/style.css" />
				</head>
				<body>
					<div className="content">
						<h1>{this.props.message}</h1>
						<h2>{this.props.error.status}</h2>
						<pre>{this.props.error.stack}</pre>
					</div>
				</body>
			</html>
		);
	}
});

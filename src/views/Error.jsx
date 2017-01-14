import React from 'react';

function Error({ title = 'ERROR', message, error }) {
	return (
		<html>
			<head>
				<title>{title}</title>
				<link rel="stylesheet" href="/styles/style.css" />
			</head>
			<body>
				<div className="content">
					<h1>{message}</h1>
					<h2>{error.status}</h2>
					<pre>{error.stack}</pre>
				</div>
			</body>
		</html>
	);
}

Error.displayName ='Error';
Error.propTypes = {
	title: React.PropTypes.string,
	message: React.PropTypes.string,
	error: React.PropTypes.object
};

export default Error;

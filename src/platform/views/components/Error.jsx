import React from 'react';
import { string, object } from 'prop-types';

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
	title: string,
	message: string,
	error: object
};

export default Error;

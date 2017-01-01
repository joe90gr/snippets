import React from 'react';

class Error extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
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
}

Error.displayName ='Error';

Error.propTypes = {
	title: React.PropTypes.string,
	message: React.PropTypes.string,
	error: React.PropTypes.object
};

export default Error;

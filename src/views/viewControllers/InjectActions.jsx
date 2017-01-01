import React from 'react';

export default function InjectActions(Component, actionManifest) {
	return React.createClass({
		displayName: 'InjectActions',

		render() {
			return <Component { ...actionManifest } {...this.props} {...this.state} />;
		}
	});
}


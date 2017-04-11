import React from 'react';

export default function InjectActions(Component, actionManifest) {
	return class InjectActions extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
			return <Component { ...actionManifest } {...this.props} {...this.state} />;
		}
	};
}

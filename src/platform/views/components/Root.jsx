import React from 'react';

import InitializerAction from 'platform/actions/InitializeAction';
import AppContainer from 'platform/views/containers/AppContainer';

class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		InitializerAction.loadConfig();
	}

	render() {
		return (<AppContainer />);
	}
}

Root.displayName = 'Root';

export default Root;

import React from 'react';

import SubscribeToStores from 'utils/SubscribeToStores';

import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';
import LoginForm from './LoginForm';

class ReactWrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { contentStore, userSessionStore } = this.props;
		let { page } = contentStore;
		let { user, errors } = userSessionStore;

		return (
			<div className="react-wrapper">
				<LoginForm user={ user } errors={ errors } />
				<Navigation />
				<div className="content">
					<PrimaryContent title={ page.title } model= { page.content } />
				</div>
			</div>
		);
	}
}

ReactWrapper.displayName = 'reactWrapper';

ReactWrapper.propTypes = {
	userSessionStore: React.PropTypes.object,
	contentStore: React.PropTypes.object
};

export default SubscribeToStores(ReactWrapper, {
	userSessionStore: [ 'user', 'errors' ],
	contentStore: [ 'page' ]
});

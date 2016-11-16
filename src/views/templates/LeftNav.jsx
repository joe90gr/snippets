import React from 'react';

import Navigation from '../components/Navigation';
import Snippets from '../content/Snippets';
import LoginForm from '../LoginForm';

class LeftNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { contentStore, userSessionStore } = this.props;
		let { page } = contentStore;
		let { user, errors } = userSessionStore;

		return (
			<div className="left-nav-layout">
				<LoginForm user={ user } errors={ errors } />
				<Navigation />
				<div className="content">
					<Snippets title={ page.title } model={ page.content }/>
				</div>
			</div>
		);
	}
}

LeftNav.displayName = 'LeftNav';

LeftNav.propTypes = {
	userSessionStore: React.PropTypes.object,
	contentStore: React.PropTypes.object
};

export default LeftNav;

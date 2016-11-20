import React from 'react';

import Navigation from '../components/Navigation';
import Snippets from '../content/Snippets';
import LoginForm from '../LoginForm';

class LeftNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const links = [ 'index', 'examples', 'iterators', 'lists', 'linked-lists', 'hashmap',
			'stack', 'promises', 'classes', 'queue', 'format-messages', 'algorithms', 'factory' ];
		const { contentStore, locationStore, userSessionStore } = this.props;
		const { page } = contentStore;
		const { registeredRoutes } = locationStore;
		const { user, errors } = userSessionStore;

		return (
			<div className="left-nav-layout">
				<LoginForm user={ user } errors={ errors } />
				<Navigation registeredRoutes={ registeredRoutes } linkList= { links } />
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
	locationStore: React.PropTypes.object,
	contentStore: React.PropTypes.object
};

export default LeftNav;

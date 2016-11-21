import React from 'react';

import Navigation from '../components/Navigation';
import Snippets from '../content/Snippets';
import LoginForm from '../LoginForm';

class LeftNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const links = [ '/', '/examples', '/iterators', '/lists', '/linked-lists', '/hashmap',
			'/stack', '/promises', '/classes', '/queue', '/format-messages', '/algorithms', '/factory' ];
		const { routingStore, contentStore, userSessionStore } = this.props;
		const { routes } = routingStore;
		const { page } = contentStore;
		const { user, errors } = userSessionStore;

		return (
			<div className="left-nav-layout">
				<LoginForm user={ user } errors={ errors } />
				<Navigation linkList= { links } routes={ routes } />
				<div className="content">
					<Snippets title={ page.title } model={ page.content }/>
				</div>
			</div>
		);
	}
}

LeftNav.displayName = 'LeftNav';

LeftNav.propTypes = {
	routingStore: React.PropTypes.object,
	userSessionStore: React.PropTypes.object,
	contentStore: React.PropTypes.object
};

export default LeftNav;

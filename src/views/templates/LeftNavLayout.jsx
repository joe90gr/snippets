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
		const { routes, page, user, errors } = this.props;

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
	routes: React.PropTypes.object,
	page: React.PropTypes.object,
	user: React.PropTypes.object,
	errors: React.PropTypes.string
};

export default LeftNav;

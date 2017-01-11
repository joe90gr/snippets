import React from 'react';

import Navigation from 'views/components/Navigation';
import LoginForm from 'views/LoginForm';
import ContentTypes from '../contentTypes/ContentTypes';

class LeftNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { routes, user, errors, page, layoutClass } = this.props;
		const links = [ '/', '/examples', '/iterators', '/lists', '/linked-lists', '/hashmap',
			'/stack', '/promises', '/classes', '/queue', '/format-messages', '/algorithms', '/factory', '/test' ];

		return (
			<div>
				<LoginForm user={ user } errors={ errors } />
				<Navigation linkList= { links } routes={ routes } />
				<div className={ `content ${layoutClass }`}>
					{ React.createElement(ContentTypes[page.type], {
						title: page.title,
						model: page.content
					})}
				</div>
			</div>
		);
	}
}

LeftNav.displayName = 'LeftNav';

LeftNav.propTypes = {
	routes: React.PropTypes.object,
	user: React.PropTypes.object,
	errors: React.PropTypes.string,
	page: React.PropTypes.object,
	layoutClass: React.PropTypes.string
};

export default LeftNav;
